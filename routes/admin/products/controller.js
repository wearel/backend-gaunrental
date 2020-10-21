const { Products } = require("../../../models/admin/products");

module.exports = {
  getAllProducts: async (req, res) => {
    const product = await Products.find().populate({path: 'categoryId', select: 'name'}); 
    try {
      res.json({
        message: "success get all user",
        product,
      })
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getProductById: async (req, res) => {
    const product = await Products.findById(req.params.id);

    try {
      res.json({
        message: "Get Data By id",
        product,
      });
    } catch (error) {
      res.status(500).send(`Data is ${error}`);
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
  editProduct: async (req, res) => {
    const product = await Products.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          nameProduct: req.body.nameProduct,
          price: req.body.price,
          categoryId: req.body.categoryId,
          description: req.body.description,
          imgUrl: req.body.imgUrl
        },
      }
    );
    try {
      await product.save();
      res.json({
        message: " Edit Data Success ",
        changeData: product,
      });
    } catch (error) {
      res.status(404).send(`Data is ${error}`);
    }

  },

  deleteProduct: async (req, res) => {
    await Products.findByIdAndRemove(req.params.id);
    try {
      res.json({
        message: "Delete Success",
      });
    } catch (error) {}
  },
};
