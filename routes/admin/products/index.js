const express = require("express");
const router = express.Router();

const { getAllProducts, postProducts } = require("./controller");

router.get("/", getAllProducts);
router.post("/", postProducts);

module.exports = router;
