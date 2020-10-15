require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserLogin } = require("../../../models");

module.exports = {
  loginStudent: async (req, res) => {
    try {
      const user = await UserLogin.findOne({ email: req.body.email });
      if (user) {
        const pass = bcrypt.compareSync(req.body.password, user.password);
        if (pass) {
          const token = jwt.sign(user.toObject(), process.env.SECRET_KEY);
          res.json({
            message: "LOGIN SUCCESS",
            token,
          });
        } else {
          res.json("wrong password");
        }
      } else {
        res.json("user not found");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
