const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
//install cookie-parser middleware to parse the cookies which are sent to the server with every client-request, so as to use these cookies at the client side


// Use cookie-parser middleware with a secret key for signed cookies
app.use(cookieParser('secretkeyforsignedcookies'));

app.get('/', (req, res) => {
    res.send("homepage");
})

app.get('/greet', (req, res) => {
    const {name = 'noname'} = req.cookies;
    res.send(`Hey there, ${name}`);
});

app.get('/setCookie', (req, res) => {
    res.cookie('name', 'Ritu');
    res.cookie('animal', 'dog');
    res.cookie('fruit', 'grape', { signed: true });
    res.send("set cookies");
})

app.get('/allCookies', (req, res) => {
    res.send(req.cookies);
})

app.get('/verifyFruit', (req, res) => {
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})
