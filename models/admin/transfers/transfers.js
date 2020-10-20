const mongoose = require('mongoose')

const transferSchema = new mongoose.Schema({
  nameMethod: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});


const Transfer = mongoose.model("transfers", transferSchema);

module.exports = Transfer;
