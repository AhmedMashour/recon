const { getIdentityRequests } = require('../use-cases');

module.exports = ({ pagination }) => {
  return async (req, res, next) => {
    try {
      const limit = Number(req.query.limit) || Number(pagination.LIMIT);
      const key = req.query.key || '';
      const IdentityRequests = await getIdentityRequests({
        ...req.query,
        key,
        limit
      });

      return res.status(200).json({
        success: true,
        requests: IdentityRequests || []
      });
    } catch (e) {
      return next(e);
    }
  };
};