const mongoose = require("mongoose");

const UserRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nohandphone: {
    type: Number,
    required: true,
  },
});

const UserRegister = mongoose.model("user-register", UserRegisterSchema);

module.exports = {UserRegister};
