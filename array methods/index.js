//FOR EACH
let arr = [1,4,43,2,5];
arr.forEach((el) => {
    console.log(el);
})
let students = [
    {
        name: "Ritu",
        marks: 98,
    },
    {
        name: "Meena",
        marks: 100,
    },
    {
        name: "Tanya",
        marks: 89,
    },
];
students.forEach((student) =>{
    console.log(student.marks);
});


//MAP
let nums = [1,2,4,13,5,4, 12, 90];
let double = nums.map((el) =>{
    return el * 2;
})

let gpa = students.map((student) =>{
    return student.marks / 10;
})


//FILTER
let evenNums = nums.filter((el) =>{
    return el % 2 == 0;
})
let oddNums = nums.filter((el) =>{
    return el % 2 != 0;
})


//EVERY : same as and
let isEven = evenNums.every((el) =>{
    return el % 2 == 0;
})


//SOME: same as or
let isEvenSome = nums.some((el) =>{
    return el % 2 == 0;

})


//REDUCE : returns a single value
let numbers = [1,2,3,4];
let mySum = numbers.reduce((res, el) =>{
    console.log(res);
    return res + el;
})


function getMax(nums){
    let myMax = numbers.reduce((maxi, el) => {
        if(maxi < el){
            return el;
        }else{
            return maxi;
        }
    });

    return myMax;
}