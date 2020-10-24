const mongoose = require('mongoose')

const transferSchema = new mongoose.Schema({
  nameMethod: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  }
});


const Transfers = mongoose.model("transfers", transferSchema);

module.exports = {Transfers};
