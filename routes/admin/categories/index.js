const express = require('express');
const router = express.Router();

const {getAllCategory, getCategoryById, postCategory} = require('./controller');

router.get('/category', getAllCategory);
router.get('/category/:id', getCategoryById);
router.post('/add-category', postCategory);

module.exports = router;``