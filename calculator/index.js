const calc = {
    num: 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }, 
    div(a, b){
        return a / b; // can directly define in this shorthand way, JS will interpret div as key and value as function
    }

};
console.log(calc.add(5, 6));