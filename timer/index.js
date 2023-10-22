let seconds = 0;
function CallTimer(){
    setInterval(updateTime, 1000);
}
function updateTime(){
    ++seconds;
    document.getElementById("time").innerHTML = seconds;
}
document.addEventListener("load", CallTimer());

