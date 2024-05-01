const guessedLetters= document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton =document.querySelector(".play-again");

const word = "magnolia";

//display your symbols as placeholders for the chosen words letters

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("🕳️");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//adding event listener for the button

guessButton.addEventListener("click",function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});


