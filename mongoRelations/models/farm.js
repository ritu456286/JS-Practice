const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
    });

    // ONE TO MANY RELATION

const productSchema = new Schema({
    name: String,
    price: Number,
    season:{
        type: String,
        enum: ["Spring", "Summer", "Winter"],
    }
});

const farmSchema = new Schema({
    name: String,
    location : String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Product = mongoose.model('Product', productSchema);

const Farm = mongoose.model('Farm', farmSchema);

const addProducts = async () => {
    await Product.insertMany([
        {
            name: "Watermelon Loo",
            price: 4.55,
            season: 'Summer'
        },
        {
            name: 'Mango brilliance',
            price: 5.3,
            season: 'Summer'
        },
        {
            name: 'Apple cold',
            price: 3.54,
            season: 'Winter',
        }

    ])
};

// addProducts();

const addFarm = async () => {
    const allProducts = await Product.find({});
    const farm1 = new Farm({
        name: "Mexican Green Forest",
        location: "Mexico", 
    });
    // farm1.products.push(prod1);
    allProducts.forEach(prod => {
        farm1.products.push(prod);
    })
    console.log(farm1);
    farm1.save();
}
// addFarm();

//use populate to view the entire products in the result as well, not just id
const viewFarm = async() => {
    const farm1 = await Farm.findOne().populate('products', 'name'); //use name, or any other field(s) that you want to display, else full product will be shown
    console.log(farm1);
}
viewFarm();