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