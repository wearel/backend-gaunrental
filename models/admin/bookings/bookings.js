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
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
      required: true,
    },
    nameProduct: {
      type: String,
      required: true,
    },
    price : {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    }
  },
  total: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user-register',
    required: true,
  },
  bankId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'banks'
  },
  status : {
    type: String,
    default: 'Proses'
  }
});

const Booking = mongoose.model('bookings', bookingSchema);
module.exports = Booking;
