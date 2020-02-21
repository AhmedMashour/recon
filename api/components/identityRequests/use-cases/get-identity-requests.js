const model = require('../models');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger }) => async ({
  lastId,
  status,
  key,
  limit
}) => {
  const query = {
    _id: { $gt: lastId },
    status,
    isArchived: false
  };
  const select = 'userId status identificationImages createdAt';
  let sort = { createdAt: 1 };
  if (status !== 'pending') sort = { updatedAt: -1 };
  const populate = {
    path: 'userId',
    match: { isArchived: false, fullName: { $regex: key, $options: 'i' } },
    select: '_id fullName phone email government gender job'
  };
  let requests = await model.getMany({
    query,
    select,
    sort,
    skip: 0,
    limit,
    populate
  });
  requests = requests.filter(request => request.userId);

  return requests;
};