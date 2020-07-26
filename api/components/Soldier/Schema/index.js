const makeSoldierScheme = require('./SoldierSchema');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const pendingStatus = require('../../../shared/constants/defaults')
  .REQUEST_STATUS;

module.exports = makeSoldierScheme({
  requestStatus,
  pendingStatus: pendingStatus.PENDING
});
