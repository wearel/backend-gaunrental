const mongoose = require('mongoose');

const galerySchema = new mongoose.Schema({
    imgUrl : {
        type: String,
        required: Boolean
    },
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'products',
    }
});

const Gallery = mongoose.model('galleries', galerySchema);
module.exports = Gallery;