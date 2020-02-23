const bcjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const ObjectId = mongoose.Types.ObjectId;
const _ = require('lodash');

const jwt = Promise.promisifyAll(jsonwebtoken);

const { ApplicationError } = require('../../../shared/errors');

const makeUnitEntity = require('./UnitEntity');

const pendingStatus = require('../../../shared/constants/defaults')
    .REQUEST_STATUS;

const Entity = makeUnitEntity({
    bcrypt: bcjs,
    ApplicationError,
    ObjectId,
    jwt,
    _,
    pendingStatus: pendingStatus.PENDING
});

module.exports.UnitEntity = Entity;