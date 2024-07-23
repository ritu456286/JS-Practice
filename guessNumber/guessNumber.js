let myGuess = Math.floor(Math.random() * 5);
let count = 0;

document.getElementById('submitGuess').addEventListener('click', () => {
    const value = document.getElementById('guessing').value;
    const resultContainer = document.querySelector('.result');
    let result = "";
    if (isNaN(parseInt(value))) {
        alert("Please input only integers!");
    } else {
        if (parseInt(value) === myGuess) {
            result = `Correct Guess! <br> You have used ${count + 1} number of guesses`;

            resultContainer.innerHTML = result;
            return;

        } else{
            result = "Incorrect Guess!";
            count ++;
            if(count >= 5){
                resultContainer.innerHTML = result;
                return;
            }
        }
    }
    resultContainer.innerHTML = result;
})



