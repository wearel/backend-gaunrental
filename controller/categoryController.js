const { Category } = require('../models/Category');
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  getAllCategory: async (req, res) => {
    const category = await Category.find();
    try {
      res.json({
        message: "Get All Data Category",
        category,
      });
    } catch (error) {
      res.status(500).send(`Data is ${error}`);
    }
  },

  getCategoryById: async (req, res) => {
    const category = await Category.findById(req.params.id);

    try {
      res.json({
        message: "Get Data By id",
        category,
      });
    } catch (error) {
      res.status(500).send(`Data is ${error}`);
    }
  },

  postCategory: async (req, res) => {
    const category = await Category.create(req.body);

    try {
      res.json({
        message: " Add Data Success ",
        category,
      });
    } catch (error) {
      res.status(404).send(`Data is ${error}`);
    }
  },

  editCategory: async (req, res) => {
    const category = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
        },
      }
    );

    try {
      await category.save();
      res.json({
        message: " Edit Data Success ",
        changeData: category,
      });
    } catch (error) {
      res.status(404).send(`Data is ${error}`);
    }
  },

  deleteCategory: async (req, res) => {
    await Category.findByIdAndRemove(req.params.id);
    try {
      res.json({
        message: "Delete Success",
      });
    } catch (error) {}
  },
};
