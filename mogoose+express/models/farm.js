const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm name is required!'],
    },
    city: String,
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;