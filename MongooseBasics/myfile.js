// const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
//     .then(() => {
//         console.log("connected successfullY!");
//     })
//     .catch((e) =>{
//         console.log("Error in connecting!");
//         console.log(e);
//     })



// //to listen to the connection events
// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', function() {
// //   console.log('MongoDB connected!');
// // });

// const moviesSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String
// });

// const Movie = mongoose.model("Movie", moviesSchema) //collection would be movies, Movie class is created
// const amadeus = new Movie({ title: 'Amadeus', year: 1920, scrore: 9.2, rating: "R"});