// create a function to produce a random number between 1 - 10
function getRandomNumberInRange(min, max){
    // math.ceil rounds a number up to the nearest integer.
    min = Math.ceil(min);
    // math.floor returns the largest integer less than or equal to a given number.
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessNumber(userInput){
userInput = window.prompt("Guess a number from 1 to 5: ");
if (userInput == getRandomNumberInRange(1,5)){
    return document.getElementById("number").innerHTML = "number guessed correctly";
} else {
    return document.getElementById("number").innerHTML = "you suck. Die";
    }
}