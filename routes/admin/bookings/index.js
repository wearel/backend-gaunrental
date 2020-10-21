const express = require("express");
const router = express.Router();

const { postBookings, getAllBookings, getBookingById, deleteBooking } = require("./controller");

router.get("/booking", getAllBookings);
router.post("/add-booking", postBookings);
router.get('/booking/:id', getBookingById);
router.delete('/booking/:id', deleteBooking);

module.exports = router;
