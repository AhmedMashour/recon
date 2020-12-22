/* eslint-disable no-param-reassign */
const model = require('../Models');
const { recruitmentAreas } = require('../../../shared/constants/locations');

/**
 * @description check user login data and return login token if user is exist and verified
 * @param {Object} of {String} phone, {String} password, {String} agent
 * @returns {token} if user found or {error} if not
 * @memberof use-cases
 */

// should have no implementation for any specific orm
module.exports = ({ ApplicationError, GetSortObj }) => async ({
  type,
  seq,
  date,
  adminNo,
  direction,
  subject,
  mailType,
  branches,
  wordMule,
  folder,
  number,
  status,
  key,
  limit,
  sortIndex,
  sortKey,
  sortValue
}) => {
  const sortObj = GetSortObj({
    sortIndex,
    sortKey,
    sortValue
  });
  const query = {
    ...sortObj.query,
    isHidden: false,
    isArchived: false
  };
  if (key && key !== '') {
    query.$or = [
      {
        fullName: { $regex: key, $options: 'i' },
        millitaryId: { $regex: key, $options: 'i' },
        'tripleNumber.value': { $regex: key, $options: 'i' }
      }
    ];
  }
  if (type) query.type = type;
  if (seq) query.seq = { $regex: seq, $options: 'i' };
  if (number) query.number = { $regex: number, $options: 'i' };
  if (date) query.date = date;
  if (direction) query.direction = direction;
  if (status) query.status = status;
  if (adminNo) query.adminNo = adminNo;
  if (subject) query.subject = subject;
  if (mailType) query.mailType = mailType;
  if (branches) query.branches = branches;
  if (wordMule) query.wordMule = wordMule;
  if (folder) query.folder = folder;
  // #! Added for the poc case
  limit = 10000000000;

  const select = '';
  const sort = sortObj.sort;
  const { mails, total, hasNext } = await model.getMails({
    query,
    select,
    sort,
    limit
  });
  if (mails && mails.length !== 0) {
    return { total, hasNext, mails };
  }
  return { total: 0, hasNext: false, mails: [] };
};
