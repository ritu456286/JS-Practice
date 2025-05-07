const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { verifyUser, hashPassword } = require('../utils/hashing');

const userSchema = new Schema({
    username:{
        type: String,
        required: [true, 'username is required']
    },
    password:{
        type: String,
        required: [true,'password is required']
    }
})

userSchema.statics.findAndValidate = async function(username, password) {
    const foundUser = await this.findOne({ username });
    if(!foundUser) return false;
    const isValid = await verifyUser(password, foundUser.password);
    return isValid ? foundUser : false;
}

userSchema.pre('save', async function(next){
    //pre middleware
    //if password is not modified, then skip re-hashing the password
    if (!this.isModified('password')) return next();
    //before saving the password, hash it
    this.password = await hashPassword(this.password); 
    next();
})


module.exports = mongoose.model('User', userSchema);