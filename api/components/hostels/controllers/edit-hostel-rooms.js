const { editHostelRooms } = require('../use-cases');

module.exports = () => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id;
      await editHostelRooms({ userId, ...req.body });

      return res
        .status(200)
        .json({ success: true, message: 'Hostel Rooms edited successfully!' });
    } catch (e) {
      console.log('aaaaaaaaaaaaaaaaaaaaaa');
      console.log(e);
      console.log('aaaaaaaaaaaaaaaaaaaaaa');
      return next(e);
    }
  };
};
