const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'images',
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'categories',
  },
});


const Product = mongoose.model('products', productSchema);

module.exports = Product;
