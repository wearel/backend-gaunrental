const { Transfers } = require('../models/Transfer');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

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

  getTransferById: async (req, res) => {
    const transfer = await Transfers.findById(req.params.id);

    try {
      res.json({
        message: "Get Data By id",
        transfer,
      });
    } catch (error) {
      res.status(500).send(`Data is ${error}`);
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

  editTransfer: async (req, res) => {
    const transfer = await Transfers.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          nameMethod: req.body.nameMethod,
          nomorRekening: req.body.nomorRekening
        },
      }
    );

    await transfer.save();
    try {
      res.json({
        message: " Edit Data Success ",
        changeData: transfer,
      });
    } catch (error) {
      res.status(404).send(`Data is ${error}`);
    }

  },

  deleteTransfer: async (req, res) => {
    await Transfers.findByIdAndRemove(req.params.id);
    try {
      res.json({
        message: "Delete Success",
      });
    } catch (error) {}
  },
};
