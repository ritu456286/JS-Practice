const express = require('express');
const mongoose =  require('mongoose');
const path = require('path');
const session = require('express-session');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log("connected successfullY to MONGO!");
    })
    .catch((e) =>{
        console.log("Error in connecting to MONGO!");
        console.log(e);
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
//define session before registering routes
app.use(session({
    secret: 'notgoodsecret',
    resave: false,  // Prevents session from being saved back to the store if unmodified
    saveUninitialized: true,  // Saves uninitialized sessions (new but not modified)
    cookie: { maxAge: 60000 }  // Optional: Set session expiration time (in milliseconds)
}));

const requireLogin = (req, res, next) => {
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

app.get('/', (req, res) =>{
    res.send("homepage");
} )


app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})
