const sum = (a, b) => a + b; // can remove () from (a + b) since it's a single value 
const cube = num => {
    return num ** 3;
}
//both of the sytax works
// const cube = (num) => {
//     return num ** 3;
// }

const power = (a, b) => {
    return a ** b;
};
const greet = () => {
    console.log("namaste!");
};

//implicit return in arrow function
// NOTE the use of () instead of {}
const mul = (a, b) => (a * b);