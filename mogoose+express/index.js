const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farms')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send("HOME PAGE");
})

//READ
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    res.render('products/index', { products });
})

//CREATE: get form
app.get('/products/new', (req, res) => {
    res.render("products/new");
    // res.send("new PAge");
});

//READ
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})


app.post('/products', async (req, res) => {
    // console.log(req.body); //req.body will be undefined if not parsed with the help of a parser
    const newProduct = new Product({
        ...req.body
    });

    // const newProduct = new Product(req.body) //this also works
    // console.log(newProduct);
  
    await newProduct.save();
        // .then(res => console.log(`Product saved successfuly.
        //     ${res}`))
        // .catch(err => console.log("Error occurred"));
    res.redirect(`/products/${newProduct._id}`);
    
});


app.listen(3000, () => {
    console.log("App is listening on port 3000");
})