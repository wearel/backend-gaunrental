const express = require("express");
const router = express.Router();

const { postUserRegister, getAllUserRegister } = require("./controller");

router.get("/user-reguster", getAllUserRegister);
router.post("/register", postUserRegister);

module.exports = router;
