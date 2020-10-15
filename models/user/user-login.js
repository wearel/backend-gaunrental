const mongoose = require("mongoose");

const UserLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserLogin = mongoose.model("User Login", UserLoginSchema);

module.exports = UserLogin;
