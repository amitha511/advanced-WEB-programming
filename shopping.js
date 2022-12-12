const mongoose = require('mongoose');

const shoppingSchema = new mongoose.Schema({

    amount: {
        type: Number,
        require: true,
        min:0
    },
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    }
}); 

const Shopping = mongoose.model('shopping', shoppingSchema);

module.exports = Shopping;