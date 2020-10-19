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

const ProductsSchema = Schema({
  // _id: {
  //   type: Number,
  // },
  nameProduct: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: {
    type: Number,
  },
  categoryId: {
    type: Number,
  },
});

ProductsSchema.plugin(autoIncrement.plugin, {
  model: "id",
  startAt: 1,
  incrementBy: 1,
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = Products;
