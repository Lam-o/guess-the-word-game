const guessedLettersElement= document.querySelector(".guessed-letters");
const guessedLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton =document.querySelector(".play-again");

const word = "magnolia";

//add new global variable for player guesses part#2
guessedLetters = [];

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
//validate input button event handler part#2...

guessedLetterButton.addEventListener("click",function (e) {
    e.preventDefault();
    //empty message paragraph
    message.innerText = "";
    //lets grab what we entered in the input
const guess = letterInput.value;
    //lets make sure its a single letter
const goodGuess = validateInput(guess);

if(goodGuess) {
    //we've got a letter ! lets guess ?
    makeGuess(guess);
}
    console.log(guess);
    letterInput.value = "";
});

//create a function to check players input part#2...

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.Length === 0) {
    //is the input empty
    message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
    //did you type one than more letter ?
    message.innerText = "Please enter a single letter.";    
    } else if (!input.match(acceptedLetter)) {
    //did you type a single letter,special character or some non letter ?
    message.innerText = "Please enter a letter from A-Z.";    
    } else {
    //Finally got a letter, WAHOOOoooooh !!
    return input;    
    }
};

//create function to capture input part#2...

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, Please try again ??";    
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
//calling the function so letter displays if hasn`t been chosen part#3
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

//create a function to show the guessed letters part#3

const showGuessedLetters = function () {
     //empty inner HTMl of unordered list
guessedLettersElement.innerHTML = "";
for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
}
};

//function to update the word in progress part#3

//function to replace circle symbols with correct letters
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase ();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("🕳️");
        }
    }
    //console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
  checkIfWin();     
};

//function to check if player has won 

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class = "highlight">You guessed correct ... YAHOOOOooo !</p>`;
    }
};















    






