require("dotenv").config();
const URI = process.env.DB_LIVE;
var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  autoIncrement = require("mongoose-auto-increment");

var connection = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

autoIncrement.initialize(connection);

const BookingsSchema = Schema({
  // _id: {
  //   type: Number,
  // },
  bookingStart: {
    type: Date,
    required: true,
  },
  bookingEnd: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
  },
  userId: {
    type: Number,
  },
  productId: {
    type: Number,
  },
  transferId: {
    type: Number,
  },
});

BookingsSchema.plugin(autoIncrement.plugin, {
  model: "id",
  startAt: 1,
  incrementBy: 1,
});

const Bookings = mongoose.model("bookings", BookingsSchema);

module.exports = Bookings;
