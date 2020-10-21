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
  imgUrl: {
    type: String,
   required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'categories',
  },
});


const Products = mongoose.model('products', productSchema);

module.exports = Products;

