const { getEvents } = require('../ExternalUseCases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const lastId = req.query.lastId || pagination.LAST_ID;
      // TODO made pagination
      const limit = 10000000000;
      const events = await getEvents({
        ...req.query,
        limit,
        lastId,
        targetId: userId,
        seen: false
      });

      return res.status(200).json({
        success: true,
        eventsCount: events.length || 0
      });
    } catch (e) {
      return next(e);
    }
  };
};