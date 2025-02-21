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
};

// Random Number Function
