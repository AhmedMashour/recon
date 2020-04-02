const { Builder, ValidatorHelper } = require('validation-helpers');
const _ = require('lodash');
const moment = require('moment');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const makeGetUploadedUnitsRequests = require('./get-uploaded-units-requests');
const makeUpdateUploadedUnitsRequests = require('./update-uploaded-unit-request');
const { defaultConstants } = require('../../../shared/constants');

const requestStatus = Object.values(defaultConstants.REQUEST_STATUS);
const requestResponse = Object.values(defaultConstants.REQUEST_RESPONSE);
const {
  REQUEST_RESPONSE,
  REQUEST_TYPES,
  SORT_KEYS,
  SORT_VALUES
} = require('../../../shared/constants/defaults');

const requestTypes = Object.values(REQUEST_TYPES);
const sortValues = Object.values(SORT_VALUES);
const sortKeys = Object.values(SORT_KEYS);

module.exports.getUploadedUnitsRequests = makeGetUploadedUnitsRequests({
  moment,
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestTypes,
  requestStatus,
  sortKeys,
  sortValues
});

module.exports.updateUploadedUnitRequest = makeUpdateUploadedUnitsRequests({
  _,
  Builder,
  ValidatorHelper,
  ObjectId,
  requestResponse,
  requestTypes,
  reject: REQUEST_RESPONSE.REJECTED,
  sortKeys,
  sortValues
});
