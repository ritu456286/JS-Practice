console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a); // if a is defined then try will not throw any error and a will be printed on cosole
} catch(err){
    //catch or finally statements are must if try statement is written
    console.log("Caught an error, a is not defined");
    console.log(err); // passing err is optional
}
console.log("hello again");
console.log("hello again");
console.log("hello again");
console.log("hello again");
