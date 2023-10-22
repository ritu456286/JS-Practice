//SYNTAX: setTimeout(function, timeout)
// timeout is in ms
console.log("Hello people!");
// setTimeout(() => {
//     console.log("Apna College!");
// }, 4000);

//setInterval will execute the statements after that time intervals
//this function returns the id of the function which can be used to stop the execution of the setInterval

let id1 = setInterval(() =>{
    console.log("Apna college");
}, 2000);

console.log(id1);

let id2 = setInterval(() => {
    console.log("Hello world")
}, 3000);
let id3 = setTimeout(() =>{
    console.log("stopped id1");
    clearInterval(id1);
}, 8000);
let id4 = setTimeout(() => {
    console.log("stopped id2");
    clearInterval(id2);
}, 12000);

console.log(id2);
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

