const colorize = () => {
    const r = Math.floor(Math.random() * 255) ;
    const b = Math.floor(Math.random() * 255) ;
    const g = Math.floor(Math.random() * 255);
    let isDark = false;
    if(r + g + b <= 550) isDark = true;
    return [`rgb(${r}, ${b}, ${g})`, isDark];
}



const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
btn.addEventListener('click', () => {
    [colorText, isDark] = colorize();
    h1Color = colorText;
    if(isDark){
        h1Color = "rgb(250, 240, 200)"
    }else{
        h1Color = "rgb(0, 0, 1)";
    }
    h1.innerText = colorText;
    h1.style.color = h1Color;
    document.body.style.backgroundColor = colorText;
})
