const express = require("express");
const router = express.Router();

const {postUserRegister, postUserLogin, getAllUserRegister } = require("../controller/userController");
const { postBookings, getAllBookings, getBookingById, deleteBooking } = require("../controller/bookingController");
const {getAllCategory, getCategoryById, postCategory, editCategory, deleteCategory} = require('../controller/categoryController');
const { getAllProducts, postProducts, getProductById, editProduct, deleteProduct } = require('../controller/productController');
const { getAllTransfers, postTransfers, getTransferById, editTransfer, deleteTransfer } = require('../controller/transferController');



const { auth } = require('../helper/auth');

router.get('/user/member', auth, (req, res) => {
    res.json({
        message: 'Hallo user',
        user: req.body,
    });
});

// user
router.post('/register', postUserRegister);
router.get("/user-register" ,getAllUserRegister);
router.post("/login", postUserLogin);
// router.get('/logout', actionLogout)

// booking

router.get("/booking", getAllBookings);
router.post("/add-booking", postBookings);
router.get('/booking/:id', getBookingById);
router.delete('/booking/:id', deleteBooking);

// category

router.get('/category', getAllCategory);
router.get('/category/:id', getCategoryById);
router.post('/add-category', postCategory);
router.put('/edit-category/:id', editCategory);
router.delete('/category/:id', deleteCategory);

// product

router.get("/product", getAllProducts);
router.post("/add-product", postProducts);
router.get('/product/:id', getProductById);
router.put('/edit-product/:id', editProduct);
router.delete('/product/:id', deleteProduct);

// transfer

router.get("/transfer", getAllTransfers);
router.post("/add-transfer", postTransfers);
router.get('/transfer/:id', getTransferById);
router.put('/edit-transfer/:id', editTransfer);
router.delete('/transfer/:id', deleteTransfer);

module.exports = router;
