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

//ONE TO BAZILLION relationship
//here for each tweet store the user
const tweetSchema = Schema({
    text: String,
    likes: Number,
    username: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const userSchema = Schema({
    name: String,
    age: Number,
})

const Tweet = mongoose.model('Tweet', tweetSchema);
const User = mongoose.model('User', userSchema);

const makeTweets = () => {
    const u = new User({username: "ritu456", age:19});
    
    const t1 = new Tweet({text: "Hello there, pretty!", likes: 90});
    t1.username = u;
    u.save();
    t1.save();
}
makeTweets();
