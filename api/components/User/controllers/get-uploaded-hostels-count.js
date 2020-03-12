const { getUploadedHostelsCount } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const uploadedHostelsCount = await getUploadedHostelsCount({
        userId
      });

      return res.status(200).json({
        success: true,
        count: uploadedHostelsCount || 0
      });
    } catch (e) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(e);
      console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
      return next(e);
    }
  };
};