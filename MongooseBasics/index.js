const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("connected successfullY!");
    })
    .catch((e) =>{
        console.log("Error in connecting!");
        console.log(e);
    })


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({
//   title: 'Amadeus',
//   year: 1986,
//   score: 9.2,
//   rating: 'R'
// });


// const harry = new Movie({
//     title: "Harry Potter and Deathly Hallows",
//     year: 2000,
//     score: 10,
//     rating: "R"
// })

//harry.save() => this also returns a promise

//NOTE: If we don't follow the defined schema, either the type gets changed or the field gets deleted by mongoose.
// const InsideOut = new Movie({
//     title: 123,
//     year: 2012,
//     score: "hello",
//     rating: "R"
// })
//this method is not common in mongoose, we don't have to use save on this, it will automatically detect to save this, and returns a promise
// Movie.insertMany([
//     {title: "Amelie", year: 2001, score: 8.3, rating: "R"},
//     {title: "Alien", year: 1979, score: 8.1, rating: "R"},
//     {title: "Joker", year: 2011, score: 9.9, rating: "PG"},
//     {title: "Stand By Me", year: 1986, score: 8.6, rating: "R"},
//     {title: "Snake Bite", year: 1900, score: 7.5, rating: "R"},
// ])
//     .then(data =>{
//         console.log("Save multiple movies!");
//         console.log(data); //data is the array of documents that you inserted
//     })