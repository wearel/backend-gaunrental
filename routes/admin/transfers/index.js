const express = require("express");
const router = express.Router();

const { getAllTransfers, postTransfers } = require("./controller");

router.get("/", getAllTransfers);
router.post("/", postTransfers);

module.exports = router;
