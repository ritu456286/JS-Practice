const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")
const engine = require('ejs-mate');
const methodOverride = require("method-override");
const Product = require("./models/product");

mongoose.connect('mongodb://127.0.0.1:27017/farms')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
    })

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method")); //for put patch delete in forms

const categories = ['fruit', 'vegetable', 'diary'];

app.get('/', (req, res) => {
    res.send("HOME PAGE");
})

//READ
app.get('/products', async (req, res) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', { products,category });
    }else{
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
})

//CREATE: get form
app.get('/products/new', (req, res) => {
    res.render("products/new", {categories});
});

//READ
app.get('/products/:id', async (req, res) => {
    const { id } = req.params; 
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

//UPDATE: form rendering
app.get('/products/:id/edit', async (req, res) =>{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

//UPDATE
app.patch('/products/:id', async (req, res)=>{
    const { id }= req.params;
    const newProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${newProduct._id}`);
})

app.delete('/products/:id', async(req, res) =>{
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id, {runValidators: true, new: true});
    console.log(deletedProduct);
    res.redirect('/products');
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