const express = require('express');
const morgan = require("morgan");
const AppError = require('./AppError');
const app = express();

app.use(morgan('tiny')); //will log HTTP requests everytime a new request is made

app.use((req, res, next) =>{
    req.requestTime = Date.now();
    console.log(req.method, req.path); //these properties are inbuilt on the req obj
    next();
})

app.use('/dog', (req, res, next) =>{
    console.log("doggy");
    next();
})
//using middleware to authenticate: not recommended to pass the passwords in the query strings

// app.use((req, res, next) => {
//     const { password } = req.query; 
//     if(password === 'ritu'){
//         next();
//     }else{
//         res.send("sorry you need a password");
//     }
// })

//or use it as a callback to the specific route to authenticate
const verifyUser = (req, res, next) => {
    const { password } = req.query; 
    if(password === 'ritu'){
        next();
    }else{
        // res.send("sorry you need a password");
        // throw new Error("Password is required!");
        throw new AppError("Password is required", 401);
    }
};


// app.use((req, res, next) => {
//     // console.log("This is first middleware");
//     req.requestTime = Date.now(); //added requestTime property to req obj
//     next(); //calls the next middleware or matching route
//     // return next(); //generally we return this, so as to not execute anything after calling next middleware
//     console.log("This is first middleware - After next");
// })

// app.use((req, res, next) =>{
//     console.log("second middleware: ", requestTime);
//     next();
// })
// app.use((req, res, next) =>{
//     console.log("third middleware");
//     next();
// })

app.get('/', (req, res) =>{
    console.log(`Request DATe: ${req.requestTime}`);
    res.send("homepage");
})
app.get('/dog', (req, res) =>{
    res.send("dog page");
})

app.get('/error', (req, res) => {
    chicken.fly(); //this throws error, as chicken is not defined;
})
app.get("/secret", verifyUser, (req, res) => {
    res.send("My secret is revealed");
})
//this will only run if any of the routes is not matched, hence any response was not sent back (req-res cycle is not stopped)
app.use((req, res) => {
    res.status(404).send("not found");
})

//error handling middleware - custom
// app.use((err, req, res, next) => {
//     console.log("ERORRRRR");
//     console.log("*******");
//     // res.send("oh no!1");
//     next(err); //passes this error to next error handling middleware , here it would be the default express error handling middleware.
// })

app.use((err, req, res, next) => {
    const {status = 500, message = "Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})