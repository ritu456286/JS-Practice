const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const PI = 3.14;

////====================================================
// module.exports = "HELLO";
// module.exports = add;

//===================================================
// module.exports.add = add;
// module.exports.mul = mul;
// module.exports.PI = PI;

////====================================================
// const math = {
//         add: add,
//         mul: mul,
//         PI: PI
// }
    
// module.exports = math;
    
////======================================================  
// module.exports.add = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.PI = 3.14;


////=======================================================================
//exports is a variable referencing to module.exports..so that you've to type less
exports.add = add;
exports.mul = mul;
exports.PI = PI;