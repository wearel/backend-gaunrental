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

const TransfersSchema = Schema({
  // _id: {
  //   type: Number,
  // },
  method: {
    type: String,
    required: true,
  },
  name: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

TransfersSchema.plugin(autoIncrement.plugin, {
  model: "id",
  startAt: 1,
  incrementBy: 1,
});

const Transfers = mongoose.model("transfers", TransfersSchema);

module.exports = Transfers;
