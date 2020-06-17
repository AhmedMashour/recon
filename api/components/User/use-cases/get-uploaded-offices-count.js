/**
 * @description check user login data and return login token if user is exist and verified
 * @param {userId}
 * @returns {count} hostels count
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, logger, getUserOfficesCount }) => async ({
  userId
}) => {
  const officesData = await getUserOfficesCount({
    userId
  });

  return officesData;
};
