require("dotenv").config();
const { Transfers } = require("../../../models/admin/transfers");

module.exports = {
  getAllTransfers: async (req, res) => {
    const transfer = await Transfers.find({});

    try {
      res.json({
        message: "success get all user",
        transfer,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  postTransfers: async (req, res) => {
    const transfer = await Transfers.create(req.body);

    try {
      res.json({
        message: "success add data",
        transfer,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
