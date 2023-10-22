let myButton1 = document.querySelector("#btn1");
let myButton2 = document.querySelector("#btn2");
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("Enter your name? ");
    //using web-storage
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello, ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
}

myButton1.onclick = () => {
    setUserName();
}

function addIntro(){
    const para = "hello, my name is ${}"
}