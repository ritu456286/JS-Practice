const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/productApp')
    .then(() => {
        console.log("connected successfullY!");
    })
    .catch((e) =>{
        console.log("Error in connecting!");
        console.log(e);
    });

const productSchema = new mongoose.Schema({
    name: {
    
        type: String,
        required: true,
        lowercase: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        min: [0, "price must be positive!"],
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['Cycling'],
    },
    qty:{
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
    }
});

//this is a model instance method, that would be associated with every product that you make
productSchema.methods.greet = function(){
    //use tradition function and not arrow functions, so as to access "this"
    console.log("Hi! Thanks for purchasing me!");
    console.log(this.name);
}

productSchema.methods.toggleOnSale = function(){
    console.log(`previous onSale value: ${this.onSale}`);
    this.onSale = !this.onSale;
    return this.save(); //its an thenable object
    //The save() method in Mongoose is used to persist changes made to a document back to the database. I
    //this refers to the document instance on which the method is called.
    //  If the document already exists (i.e., it has an _id), save() will perform an update operation to modify the existing document. If the document does not exist (i.e., it doesn't have an _id), save() will create a new document.
}

productSchema.methods.addCategory = function(newCategory){
    this.categories.push(newCategory);
    return this.save();
}

//this is a static method
productSchema.statics.fireSale = function(){
    console.log("updating products!");
    return this.updateMany({}, {onSale: true, price: 0}); //we are updating all products
    // return this.save(); //this is wrong[gives error] as save() is used to persist changes of DOCUMENT to the DB. Here it is a static method which will be applied to a model and not a document

}

const Product = mongoose.model('Product', productSchema);

//this is not an instance method, it is a normal function to find a product

const findProduct = async() =>{
    const foundProduct = await Product.findOne({name: "mountain bike new"});
    foundProduct.greet(); //this refers to the foundProduct;
    await foundProduct.toggleOnSale();
    console.log(`toggled the value: ${foundProduct}`);
    await foundProduct.addCategory("Robust");
    console.log(`added new category: ${foundProduct}`)
}

// findProduct();

Product.fireSale().then(res => console.log(res));
// const bike = new Product({
//     name: "Instance Bike",
//     price: 999,
//     categories: ["Cycling", "Safety", "Speed"],
//     size: 'M',
// })



// bike.save()
//     .then(data => {
//         console.log("Bike is saved");
//         console.log(data);
//     }).catch(err => {
//         console.log("Error in saving the Bike data"); //Product Validation Failed error, if Schema is not followed
//         console.log(err);
//     })

// Product.findOneAndUpdate({name: "Test bike for update"}, {price: 10000}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("Bike is saved");
//         console.log(data);
//     }).catch(err => {
//         console.log("Error in saving the Bike data"); //Product Validation Failed error, if Schema is not followed
//         console.log(err);
//     })



