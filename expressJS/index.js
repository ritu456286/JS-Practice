const express = require("express");
//execute the server
const app = express(); //app is an object with different methods
const path = require("path");
//define port number
const port = 3000;

//this runs whenever a user goes to the port 3000 -> that is making a request to the server 
//root route
// app.use((req, res) => {
//     console.log("Yes, I have received your request!");
//     res.send({age: 2, name: "hhh"}); //send html string or object or text
//     // res.send("This is your response!"); //send html string or object or text
// })


app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, '/views')); //so that if index.js run from some other folder than also we can locate the views, because now we are giving the absolute path of the views directory

app.use(express.static(path.join(__dirname, 'public'))); //middleware

app.get('/', (req, res) => {
    console.log("Listening on root route");
    res.render("home");
    // res.send("HOMEPAGE")
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    console.log(num);
    res.render('random',{num});
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const {subreddit} = req.params;
    res.render("reddit", {smallReddit: subreddit});
})

app.get('/cats', (req, res) => {
    const cats = ['blacky', 'hell'];
    res.render("cats", {cats});
})



//using path variables
// app.get("/r/:subreddit/:id", (req, res) => {
//     const {subreddit, id} = req.params; //it is a object with key=subreddit, and value as the value of the subreddit
//     res.send(`Welcome post ${id} on ${subreddit}`);
// })

// app.get("/r/:subreddit/", (req, res) => {
//     const {subreddit} = req.params; //it is a object with key=subreddit, and value as the value of the subreddit
//     res.send(`Welcome to ${subreddit}`);
// })


// //use query strings or query parameters
// app.get("/search", (req, res) => {
//     console.log(req.params); 
//     const {item} = req.query; //item is query parameter added by the client /search?item=hesi
//     if(!item){
//         res.send(`<h1> Nothing found if nothing searched</h1>`)
//     }
//     res.send(`<h1> You searched for ${item}</h1>`); //using template strings here


// })
// app.post('/cats', (req, res) => {
//     res.send("This is a post request");
// })
// app.get('/cats', (req, res) => {
//     console.log("Listening on /cats");
//     res.send("MEOW")
// })
// app.get("/dogs", (req, res) => {
//     console.log("Listening on /dogs");
//     res.send("WOOF");
// })



// //some sort of generic response, keep it at the end only
// app.get("*", (req, res) => {
//     res.send("I don't know this path");
// })




//this runs when the server has started
// app has started from the server
app.listen(port, () => {
    console.log("App is accepting requests at 3000 port")
})