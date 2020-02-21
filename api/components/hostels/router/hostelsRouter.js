const express = require('express');
const {
  addHostelValidation,
  addHostelRoomsValidation,
  hideHostelValidation,
  unhideHostelValidation,
  deleteHostelValidation,
  getHostels,
  getHostel,
  editHostel,
  editHostelRooms,
  editHostelAvailability,
  rateHostel
} = require('../validations');

const router = express.Router();

const authenticateMiddleware = require('../../../middlewares/authenticateMiddleware');
const authorizeMiddleware = require('../../../middlewares/authorizeMiddleware');
const { PERMISSIONS } = require('../../../shared/constants/defaults');

const validateMiddleware = require('../../../middlewares/validateMiddleware');
const controllers = require('../controllers');

// @route
// @ GET api/users/profile/view
// !access  anonymous
router.post(
  '/',
  [
    validateMiddleware(addHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostel
);

router.post(
  '/rooms',
  [
    validateMiddleware(addHostelRoomsValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.addHostelRooms
);

router.put(
  '/hide/:id',
  [
    validateMiddleware(hideHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.hideHostel
);

router.put(
  '/unhide/:id',
  [
    validateMiddleware(unhideHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.unhideHostel
);

router.delete(
  '/:id',
  [
    validateMiddleware(deleteHostelValidation),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER])
  ],
  controllers.deleteHostel
);

router.get(
  '/',
  [
    validateMiddleware(getHostels),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getHostels
);

router.get(
  '/:id',
  [
    validateMiddleware(getHostel),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.getHostel
);

router.post(
  '/rate',
  [
    validateMiddleware(rateHostel),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.RENTER])
  ],
  controllers.ratehostel
);

router.put(
  '/',
  [
    validateMiddleware(editHostel),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostel
);

router.put(
  '/availability',
  [
    validateMiddleware(editHostelAvailability),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostelAvailability
);

router.put(
  '/rooms',
  [
    validateMiddleware(editHostelRooms),
    authenticateMiddleware,
    authorizeMiddleware([PERMISSIONS.HOUSE_OWNER, PERMISSIONS.ADMIN])
  ],
  controllers.editHostelRooms
);

module.exports = router;