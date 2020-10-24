const { Bookings } = require('../models/Booking');

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

  getBookingById: async (req, res) => {
    const booking = await Bookings.findById(req.params.id);

    try {
      res.json({
        message: "Get Data By id",
        booking,
      });
    } catch (error) {
      res.status(404).send(`Data is ${error}`);
    }
  },

  deleteBooking: async (req, res) => {
    await Bookings.findByIdAndRemove(req.params.id);
    try {
      res.json({
        message: "Delete Success",
      });
    } catch (error) {}
  },
};
