require("dotenv").config();
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
      res.statu(500).send(err);
    }
  },
};
