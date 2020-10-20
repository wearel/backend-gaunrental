const { Bookings } = require("../../../models/admin/bookings");

module.exports = {
  getAllBookings: async (req, res) => {
    const booking = await Bookings.find().populate(
      {path: 'productId userId transferId', select: 'nameProduct price name nameMethod'});

    try {
      res.json({
        message: "success get all user",
        booking,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  postBookings: async (req, res) => {
    const booking = await Bookings.create(req.body);

    try {
      res.json({
        message: "success add data",
        booking,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
