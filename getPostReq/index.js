const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');
uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true})); //to parse the form data in req.body
app.use(express.json()); //to parse json data -> req.body
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views")); //set up ejs views
app.set("view engine", "ejs"); //set up ejs

//data will be fetched from DB
let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "LOL! That's funny!"
    },
    {
        id: uuid(),
        username: "Ritu",
        comment: "That is not useful"
    },
    {
        id: uuid(),
        username: "Colt",
        comment: "I will teach you web-development"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I am stupid"
    }
]

//Index -> display all comments
app.get("/comments", (req, res) =>{
    res.render("comments/index", { comments }); //passing the entire data to the index.ejs
})

//create new comment form -> get the form
app.get("/comments/new", (req, res) =>{
    res.render("comments/new");
})

//push the form data to the database
app.post("/comments", (req, res) => {
    const {username, comment} = (req.body);
    comments.push({username, comment, id: uuid()});
    res.redirect("/comments"); //redirect to get request to display all the comments
})

//show one comment
app.get("/comments/:id", (req, res) => {
    const { id } = req.params; 
    const comment = comments.find(c => c.id === id);
    // console.log(comment);
    if(comment){
        res.render("comments/show", {comment});
    }else{
        res.send("Not Found");
    }

})

//get the form to edit i.e. update the request
app.get("/comments/:id/edit", (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
})

//update the comment
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const oldComment = comments.find(c => c.id === id);
    oldComment.comment = newCommentText;
    res.redirect("/comments");

})

app.delete("/comments/:id", (req, res) =>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
})

app.get('/tacos', (req, res) =>{
    console.log(req.query);
    res.send("get request");
})
app.post('/tacos', (req, res) =>{
    console.log(req.body); //req.body is undefined by default, you have to tell what type of body data is coming urlencoded or json?
    res.send("post request");
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})