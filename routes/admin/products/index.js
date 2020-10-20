const express = require("express");
const router = express.Router();

const { getAllProducts, postProducts, getProductById, editProduct, deleteProduct } = require("./controller");

router.get("/product", getAllProducts);
router.post("/add-product", postProducts);
router.get('/product/:id', getProductById);
router.put('/edit-product/:id', editProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
