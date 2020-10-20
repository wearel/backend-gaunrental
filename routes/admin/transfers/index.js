const express = require("express");
const router = express.Router();

const { getAllTransfers, postTransfers } = require("./controller");

router.get("/transfer", getAllTransfers);
router.post("/add-transfer", postTransfers);

module.exports = router;
