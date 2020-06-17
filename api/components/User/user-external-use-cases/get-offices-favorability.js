const Model = require('../models/UserFavoriteOfficesIndex');

// eslint-disable-next-line no-unused-vars
module.exports = ({ ApplicationError }) => async ({ userId, officesIds }) => {
  if (!userId) throw new ApplicationError('You should pass userId');
  if (!Array.isArray(officesIds))
    throw new ApplicationError(
      'You should pass ids as array to getOfficesFavorability (User external service)'
    );
  const result = {};
  officesIds.forEach(id => {
    result[id.toString()] = null;
  });

  const Offices = await Model.getOfficesWithIds(userId, officesIds, {
    favorite: true
  });
  Offices.map(u => {
    result[u.OfficeId.toString()] = {
      favorite: u.favorite
    };
    return true;
  });
  return result;
};
