require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserRegister } = require('../models/Users');

module.exports = {
  postUserRegister: async (req, res) => {
    let register = await UserRegister.findOne({ email: req.body.email });
    if (register) return res.json("Email Sudah Tersedia");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    register = {
      ...req.body,
      password: hash,
    };

    register = await UserRegister.create(register);

    try {
      res.json({
        message: "success add data",
        register,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  
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
