// not recommended to do this
String.prototype.yell = function() {
    console.log(`OMG!!! ${this.toUpperCase()}`);
}

"hello".yell();

Array.prototype.pop = function(){
    return "I will not pop from now! You modified me!";
}

const arr = [1, 2, 3];
console.log(arr.pop());