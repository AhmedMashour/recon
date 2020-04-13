const { updateEditHostelsRequests } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      await updateEditHostelsRequests({ ...req.body });

      return res.status(200).json({
        success: true
      });
    } catch (e) {
      return next(e);
    }
  };
};
