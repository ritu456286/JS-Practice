const express = require("express");
const methodOverride = require("method-override");
const engine = require('ejs-mate'); //for boiler plates
const path = require("path");
const AppError = require("./AppError");
const mongoose = require("mongoose")

const session = require('express-session');
const flash = require('connect-flash');

//models 
const Product = require("./models/product");
const Farm = require('./models/farm');

const app = express();

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
app.use(express.urlencoded({ extended: true})); //for parsing req.body
app.use(methodOverride("_method")); //for put patch delete in forms

app.use(session({secret: "thisismysecretkey", saveUninitialized: false, resave: false}));
app.use(flash());


//to get access to the flash message in a convinient manner on all the views ejs without explicitly passing that to the view,  we can use res.locals
app.use((req, res, next) =>{
    res.locals.messages = req.flash('success');
    next();
})

const categories = ['fruit', 'vegetable', 'diary'];

function wrapAsync(fn){
    return function(req, res, next){
        fn(req, res, next).catch( e => next(e))
    }
}

/** FARM ROUTES*/
app.get('/farms', async(req, res) => {
    const allFarms = await Farm.find({});
    res.render('farms/index', {allFarms});
    
})

//Create a new farm- form
app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})


app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
})

//rendering the create form 
app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
})

//two-way referencing
app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = await new Product(req.body);
    farm.products.push(product);
    product.farm = farm;
    await product.save();
    await farm.save();
    res.redirect(`/farms/${id}`);
})





/** PRODUCT ROUTES*/
app.get('/', (req, res) => {
    res.send("HOME PAGE");
})

//READ
app.get('/products', wrapAsync(async (req, res, next) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', { products,category });
    }else{
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
}));

//CREATE: get form
app.get('/products/new', (req, res) => {
    res.render("products/new", {categories});
});

//READ
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params; 
    const product = await Product.findById(id).populate('farm', 'name');
    if(!product){
        throw new AppError("Couldn't find the product", 404);
    }
    res.render('products/show', { product });    
}));

//UPDATE: form rendering
app.get('/products/:id/edit', wrapAsync(async (req, res, next) =>{
   
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product){
        throw new AppError("Couldn't find the product", 404);
    }
    res.render('products/edit', { product, categories });

}));

//UPDATE
app.patch('/products/:id', wrapAsync(async (req, res, next)=>{
    
    const { id }= req.params;
    const newProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${newProduct._id}`);
    
}))

app.delete('/products/:id', wrapAsync(async(req, res) =>{
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id, {runValidators: true, new: true});
    res.redirect('/products');
}));

app.post('/products', wrapAsync(async (req, res, next) => {
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
    
}));

app.post('/farms', async (req, res) => {
    const newFarm = await new Farm(req.body);
    await newFarm.save();
    req.flash('success', 'successfully created a farm'); //category or key of msg to be stored in the session, the message value
    res.redirect('/farms');
})

const handleValidationError = (err) => {
    console.log(err);
    return err;
}

app.use((err, req, res, next) => {
    // console.log(err.name);
    if(err.name === "ValidationError") err = handleValidationError(err);
    next(err);
})

app.use((err, req, res, next) => {
    const {status = 500, message= "Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})