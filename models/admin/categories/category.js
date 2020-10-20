const mongoose = require("mongoose");
const {objectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
  
})


const Category = mongoose.model('categories', categorySchema);
module.exports = Category;