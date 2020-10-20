const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  productId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
  },
  duration : {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user-register',
  },
  transferId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'transfers'
  },
  status : {
    type: String,
    default: 'Proses'
  }
});

const Bookings = mongoose.model('bookings', bookingSchema);
module.exports = Bookings;
