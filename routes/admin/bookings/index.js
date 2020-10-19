const express = require("express");
const router = express.Router();

const { postBookings, getAllBookings } = require("./controller");

router.get("/", getAllBookings);
router.post("/", postBookings);

module.exports = router;
