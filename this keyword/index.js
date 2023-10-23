const student = {
    name: "ritu",
    age: 19,
    eng: 98,
    math: 53,
    phy: 54,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

// function getAvg(){
//     console.log(this); // this will print the window object
// }

const employee = {
    name: "meena",
    age: "21",
    dept: "HR",
    prop: this, //window object : global object
    getName: function () {
        console.log(this); // employee object as employee has called function and using function keyword checks who has called him when 'this' is used
        return this.name; // returns meena
    }, 
    getMarks: () => {
        console.log(this); //parent's scope --> windows object
        return this.marks // this will return undefined as marks are not defined under windows object
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); // this is my employee object as parent is function 
        }, 2000) 
    },
    getInfo2: function() {
        setTimeout(function (){
            console.log(this); // this is my window object as this is called by inner function setTimeout which has window object
        }, 2000)
    }
}