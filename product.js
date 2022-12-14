const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    amount: {
        type: Number,
        require: true,
        min:0
    },
    img: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
}); 

const Product = mongoose.model('product', productSchema);

module.exports = Product;