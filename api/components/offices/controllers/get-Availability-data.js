const { getAvailabilityData } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const availabilityData = await getAvailabilityData({
        userId,
        ...req.query
      });

      return res.status(200).json({ success: true, availabilityData });
    } catch (e) {
      return next(e);
    }
  };
};