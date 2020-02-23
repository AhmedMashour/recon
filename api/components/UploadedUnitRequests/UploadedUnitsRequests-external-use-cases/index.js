/**
 * ! You should require any other external-use-cases or any dependency needed in any use-case
 *
 *
 *
 * ! if you need to throw Error use throw new ApplicationError() and will handle the rest in express catcher
 */
const logger = require('../../../startup/logger');
// TODO need to remove it from here and find a solution to put it in index.js
const { ApplicationError } = require('../../../shared/errors');

const makeAddUploadedUnitsRequests = require('./add-uploaded-unit-request');

const addUploadedUnitsRequests = makeAddUploadedUnitsRequests({
  ApplicationError,
  logger
});

const UploadedUnitsRequestsExternalService = Object.freeze({
  addUploadedUnitsRequests
});

module.exports = UploadedUnitsRequestsExternalService;