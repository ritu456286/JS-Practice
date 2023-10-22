const myButton = document.getElementById("create");
const fruits = ['apple', 'banana','orange'];
myButton.onclick = function createList() {
    let text = "<ul>";
    let i = 0;
    for(; i < fruits.length; i++){
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    // return text;
    document.getElementsByClassName("fruit")[0].innerHTML = text;
}
