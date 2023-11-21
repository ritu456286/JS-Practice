let nums = [1,2,4,56,3,2,6,6,73,2,4,64,3,22,1,3,5,7,9,0];
Math.min(...nums);
nums.push(-1);
Math.min(...nums);
console.log(...nums);
console.log("apna college");
let newArr = [...nums];
console.log(newArr);
newArr.push(-90);
let chars = [..."heell"];
let odd = [1,3,5,7];
let even = [2,4,6];
let allNumbers = [...odd, ...even];


//with object literal
let data = {
    email : "abc@gmail.com",
    name: "abc",
    pswd: "abcd",
};

const dataCopy = {...data, id: 123, country: "India"};
// console.log(dataCopy)

let arr = [1,2,3,4,5,6];
let obj1 = {...arr}; // here keys will be index of each element and corresponding value will be value at that index
let obj2 = {..."hello"} // keys= index and values = characters