const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connected successfullY!");
    })
    .catch((e) =>{
        console.log("Error in connecting!");
        console.log(e);
    });

const personSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
});

//Creating Virtual Full name -> derived property, will not be stored in DB, but can be computed
//this is different from instance methods as they are actually stored in DB. I can define getter method which returns first + last name;
//virtual fullName will be computed when an instance of the model calls it.
personSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`;
})

//pre and post hooks -> MIDDLEWARE
personSchema.pre('save', async function(){
    this.firstName = "YO";
    console.log("About to save");
});

personSchema.post('save', async function(){
    this.lastName = "MAMA";
    console.log("JUST SAVED!");
})

const Person = mongoose.model("Person", personSchema);

