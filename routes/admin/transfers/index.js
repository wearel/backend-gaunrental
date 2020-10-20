const express = require("express");
const router = express.Router();

const { getAllTransfers, postTransfers, getTransferById, editTransfer, deleteTransfer } = require("./controller");

router.get("/transfer", getAllTransfers);
router.post("/add-transfer", postTransfers);
router.get('/transfer/:id', getTransferById);
router.put('/edit-transfer/:id', editTransfer);
router.delete('/transfer/:id', deleteTransfer);


module.exports = router;
