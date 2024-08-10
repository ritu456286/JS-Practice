const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is  required"]
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'diary'],
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
