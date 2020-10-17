const express = require("express");
const router = express.Router();

const { postUserRegister, getAllUserRegister } = require("./controller");

router.get("/", getAllUserRegister);
router.post("/", postUserRegister);

module.exports = router;
