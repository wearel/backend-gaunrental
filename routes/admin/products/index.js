const express = require("express");
const router = express.Router();

const { getAllProducts, postProducts } = require("./controller");

router.get("/product", getAllProducts);
router.post("/add-product", postProducts);

module.exports = router;
