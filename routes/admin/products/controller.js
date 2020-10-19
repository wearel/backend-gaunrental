require("dotenv").config();
const { Products } = require("../../../models/admin/products");

module.exports = {
  getAllProducts: async (req, res) => {
    const product = await Products.find({});

    try {
      res.json({
        message: "success get all user",
        product,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  postProducts: async (req, res) => {
    const product = await Products.create(req.body);

    try {
      res.json({
        message: "success add data",
        product,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
