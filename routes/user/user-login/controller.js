require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserRegister } = require("../../../models/user");

module.exports = {
  getAllUserRegister: async (req, res) => {
    const register = await UserRegister.find({});

    try {
      res.json({
        message: "success get all user",
        register,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  postUserLogin: async (req, res) => {
    try {
      const user = await UserRegister.findOne({ email: req.body.email });
      if (user) {
        const pass = bcrypt.compareSync(req.body.password, user.password);
        if (pass) {
          const token = jwt.sign(user.toObject(), process.env.SECRET_KEY);
          res.json({
            message: "LOGIN SUCCESS",
            token,
          });
        } else {
          res.status(400).json("wrong password");
        }
      } else {
        res.status(400).json("user not found");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
