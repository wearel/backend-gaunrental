const express = require("express");
const router = express.Router();

const { postUserLogin, getAllUserRegister } = require("./controller");

router.get("/", getAllUserRegister);
router.post("/", postUserLogin);

module.exports = router;
