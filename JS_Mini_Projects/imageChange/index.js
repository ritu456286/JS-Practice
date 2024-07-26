const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

// var currentIndex = 0;

myButton.onclick = () => {
    
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "cartoon1.png"){
        myImage.setAttribute("src", "cartoon2.jpg");
    }else{
        myImage.setAttribute("src", "cartoon1.png");
    }
};