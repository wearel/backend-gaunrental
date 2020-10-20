const express = require('express');
const router = express.Router();

const {getAllCategory, getCategoryById, postCategory, editCategory, deleteCategory} = require('./controller');

router.get('/category', getAllCategory);
router.get('/category/:id', getCategoryById);
router.post('/add-category', postCategory);
router.put('/edit-category/:id', editCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;``