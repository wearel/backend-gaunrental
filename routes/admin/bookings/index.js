const express = require("express");
const router = express.Router();

const { postBookings, getAllBookings } = require("./controller");

router.get("/booking", getAllBookings);
router.post("/add-booking", postBookings);

module.exports = router;
