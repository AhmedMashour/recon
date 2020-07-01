// @route   POST api/users/login
// @desc    user login

// eslint-disable-next-line no-empty-pattern
module.exports = ({ GetBaseDomain }) => {
  return async (req, res, next) => {
    try {
      const domain = GetBaseDomain();
      await req.logout();
      req.session = null;
      await res.clearCookie('sknToken', { domain });
      await res.clearCookie('sknAppToken', { domain });
      return res.redirect('/');
    } catch (e) {
      return next(e);
    }
  };
};
