// const UnitReservationModel = require('../Models/UnitReservationModel');
const Model = require('../Models');

/**
    1 - getting un-available times over single unit
        : get all request with state done or received
        : and with data larger than current data
    2 - when user select from - to reservation stamp 
        : need to cal the cost of his reservation and retrieve it to front
        ** less (need to get some data from unit schema)
    3 - adding request 
        : need to check if this request have intersect with same unit and over 
        from to with another request with state payed or received
 */

module.exports = (/* but your inject here */) => {
  /**
    Here you should return array of times like [{from:--, to:--}]
    from should be smaller than to and from should be less than current time
   */
  const returnAllUnAvailableTimesForUnit = async unitId => {
    const result = await Model.gettingUnAvailableTime(unitId);
    if (result) {
      return { result };
    }
    return { error: { message: 'error from database', statusCode: 500 } };
  };
  /**
   you need to check if this monthly of with day
   if this monthly you need to cal amount of 
   */
  const returnAllCostForUnit = async (/* unitId, from, to */) => {};

  /* here need to get all the unit 
    - with the same id and
    - have intersect with coming one and  
    - with state payed or received
    if length of coming list larger than 0 return un-valid unit 
    else added it with state send 
  */
  const addingRequestToUnit = async (unitId, comingOne) => {
    const checkValid = await Model.checkAddingNewReservation(unitId, comingOne);
    if (checkValid && comingOne.from < comingOne.to) {
      const result = await Model.createOne(comingOne);
      return { result };
    }
    return { error: { message: 'not valid time', statusCode: 401 } };
  };

  return {
    returnAllUnAvailableTimesForUnit,
    returnAllCostForUnit,
    addingRequestToUnit
  };
};