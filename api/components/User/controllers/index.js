const makeUserRegisterCtrl = require('./user-register');
const makeUserLoginCtrl = require('./user-login');
const makePhoneVerification = require('./sms-verification');
const makeForgetPassword = require('./forget-password');
const makeConfirmForgetPassword = require('./confirm-forget-password');
const makeChangePassword = require('./change-password');
const {
  facebookAuthController,
  facebookAuthBackController,
  facebookUserData,
  googleAuthCallback,
  googleAuthController,
  googleUserData
} = require('./userController');

// ->
const registerUser = makeUserRegisterCtrl({});
const loginUser = makeUserLoginCtrl({});
const verifyPhone = makePhoneVerification({});
const forgetPassword = makeForgetPassword({});
const confirnForgetPassword = makeConfirmForgetPassword({});
const changePassword = makeChangePassword({});

const userCtrl = Object.freeze({
  registerUser,
  loginUser,
  verifyPhone,
  forgetPassword,
  confirnForgetPassword,
  changePassword,
  googleAuthController,
  googleAuthCallback,
  getGoogleUserData: googleUserData,
  facebookAuth: facebookAuthController,
  facebookAuthBack: facebookAuthBackController,
  getFacebookUserData: facebookUserData
});

module.exports = userCtrl;
