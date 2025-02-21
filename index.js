// Defining Constants
const guessBox = document.getElementById("guessBox");
const guessBtn = document.getElementById("guessBtn");
const userGuess = document.getElementById("userGuess");
const hint = document.getElementById("hint");
const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * max) + min;
console.log(randomNum);

// On Click function
guessBtn.onclick = function() {
    userGuess.textContent = `Your guess is ${guessBox.value}.`;
    console.log(guessBox.value);

    if(guessBox.value > randomNum && guessBox.value <= 100){
        hint.textContent = `${guessBox.value} is too high...`
    }
    else if(guessBox.value < randomNum && guessBox.value >= 1){
        hint.textContent = `${guessBox.value} is too low...`
    }
    else if(guessBox.value = randomNum){
        hint.textContent = `${guessBox.value} is correct!`
    }
    else{
        hint.textContent = `Please choose a number between 1-100.`
    }
};