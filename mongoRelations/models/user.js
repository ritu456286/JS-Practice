const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
    });


    //ONE TO FEW RELATIONS
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {_id: false},
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Ritu",
        last: "Kansal"
    });

    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'New York',
        country: "USA",
    })

    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const u  = await User.findById(id);
    u.addresses.push({
        
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        
    });
    const res = await u.save();
    console.log(res);
}
addAddress('66b74b1bf3e586acf267d469');