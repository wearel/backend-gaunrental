const express = require("express");
const router = express.Router;

const { loginStudent } = require("./controller");

router.post("/login", loginStudent);

module.exports = router;
