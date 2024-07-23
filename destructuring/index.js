//ues node index.js to run it in terminal only

//DESTRUCTURING ARRAYS --> here order of variable names matter

const nums = [1, 2, 4, 4, 5,5 ,6, 7, 7]
const [first, second, third, ...others] = nums;

console.log(first);
console.log(second);
console.log(third);
console.log(others); //it's an array

//DESTRUCTURING OBJECTS
const user = {
  name: "ritu",
  lastName: "kansal",
  age: 12,
  state: "delhi",
  born: "2003",
};

const { name, born: birthYear = "N/A", death = "N/A", xyx } = user; //name = user.name, birthYear= user.born, if born doesn't exits, give it N/A, xyx is undefined

console.log(user);
console.log(birthYear);
console.log(death);
console.log(xyx); //the key names which do not exist, will not be added to the orginal object - user


//PARAM DESTRUCTURING in the functions
function fullName({name, lastName}){
    console.log("I am second one");
    console.log(name + " " + lastName);
}
function fullName(user){
    console.log("i am first one");
    console.log(user.name + " " + user.lastName);
}
function fullName(user){
    console.log("i am third one");
    const {name, lastName} = user;
    console.log(name + " " + lastName);
}


fullName(user) //this will call the last defined function 


const movies = [
    {
        title: "hello",
        score: 80
    },
    {
        title: "hi",
        score: 90
    },
    {
        title: "joker",
        score: 100
    }
]

// bestMovies = movies.filter(movie => movie.score >= 90);
bestMovies = movies.filter(({ score }) => score >= 90);


