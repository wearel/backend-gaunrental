const express = require("express");
const router = express.Router();

const { postUserLogin, getAllUserRegister } = require("./controller");

const { auth } = require('../../../helper/auth');

router.get('/me', auth, (req, res) => {
    res.json({
        message: 'Hallo user',
        user: req.body,
    });
});


router.get("/", getAllUserRegister);
router.post("/", postUserLogin);

module.exports = router;
