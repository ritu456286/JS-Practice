const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/farms')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
    })

//Product is the model

// const p = new Product({
//     name: "Grapes",
//     price: 45,
//     category: 'fruit',
// });

// p.save()
//     .then(res => console.log(res))
//     .catch(e => console.log(e));

//MOCK DATA

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Green Guava',
        price: 5.00,
        category: 'fruit'
    },
    {
        name: 'Juicy Mango',
        price: 2.00,
        category: 'fruit'
    },
    {
        name: 'Slim Lady Finger',
        price: 1.00,
        category: 'vegetable'
    },
];

Product.insertMany(seedProducts);

const removeDuplicates = async () =>{
    const duplicates = [];
    const count = {}
    const allProducts = await Product.find({});
    allProducts.forEach(p => {
        if(count[p.name]){
            count[p.name] += 1;
            duplicates.push(p._id);
        }else{
            count[p.name] = 1;
        }
        
    })

    for(let id of duplicates){
        await Product.findByIdAndDelete(id);
    }
    console.log(count);
    console.log("Done");
}

removeDuplicates();