const { getEvents, markSeen } = require('../ExternalUseCases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      const lastId = pagination.LAST_ID;
      // TODO made pagination
      const limit = 100000000000000;
      const events = await getEvents({
        ...req.query,
        limit,
        lastId,
        targetId: userId,
        seen: false
      });
      // any event go throw then it seen

      if (events.length)
        markSeen({ targetId: userId, events: events.map(ev => ev._id) });

      return res.status(200).json({
        success: true,
        count: events.length || 0,
        unseen: events || []
      });
    } catch (e) {
      return next(e);
    }
  };
};
