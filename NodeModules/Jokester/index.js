const jokes = require("give-me-a-joke");
const cowsay = require("cowsay"); //global module, first link it using npm link cowsay
const colors = require("colors");
// console.log(jokes);
// console.dir(jokes);

jokes.getRandomDadJoke (function(joke) {
    //  console.log(joke);
    console.log(colors.rainbow(joke));
});