const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
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
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm',
    }
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
