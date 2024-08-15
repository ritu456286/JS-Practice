const express = require('express');
const app = express();

const session = require('express-session');

app.use(session({ secret: 'hellosecret', saveUninitialized: false, resave: false }));

app.get('/', (req, res) =>{
    if(req.session.count){
        req.session.count += 1;
    }else{
        req.session.count = 1;
    }
    res.send(`you have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username ='XYZ' } = req.query;
    req.session.username = username; 
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    res.send(`Welcome back, ${req.session.username}`);
})
app.listen(3000, () => {
    console.log("Listening on port 3000");
})