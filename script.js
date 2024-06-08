const userInput = document.querySelector('#guess')
const submit = document.querySelector('#submit')
const preGuess = document.querySelector('#guesses')
const guessLeft = document.querySelector('#leftGuess')
const result = document.querySelector('#result')
const resultArea = document.querySelector('.result')

const p = document.createElement('p');

let attempt = 10;
let guesses = [];
let randNum = parseInt(Math.random() * 100 + 1);
console.log(randNum);

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        if (attempt === 1) {
            displayMessage(`Out of Guesses.The Number was ${randNum}.`)
            endGame()
        } else {
            checkValidity(guess)
            // displayInfo(guess)
        }
    })
}


function checkValidity(guess) {
    if (guess < 1 || guess > 100) {
        displayMessage(`Enter a Number between 1-100.`)
    }
    else if (isNaN(guess)) {
        displayMessage(`Enter a Valid Number.`)


    }
    else {
        guesses.push(guess)
        console.log(guesses);

        compairNumb(guess)
        displayInfo(guess)
    }

}
function compairNumb(guess) {
    if (guess === randNum) {
        displayMessage('You Gussed Correct!!')
        endGame()
    }
    if (guess < randNum) {
        displayMessage(`Guess Higher.`)
        attempt--
    }
    if (guess > randNum) {
        displayMessage(`Guess Lower.`)
        attempt--

    }

}
function displayMessage(message) {
    result.innerHTML = message;
}
function displayInfo(guess) {
    userInput.value = ''
    guessLeft.innerHTML = `${attempt}`
    preGuess.innerHTML += `${guess}  `

}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.innerHTML = `<h2 id="playAgain" style="color:#040D12; border: #040D12 solid; background-color: #9DDE8B;">Start New Game</h2>`
    resultArea.appendChild(p);
    playGame = false;
    newGame()


}
function newGame() {
    const newGameButton = document.querySelector('#playAgain')
    newGameButton.addEventListener('click', (e) => {
        randNum = parseInt(Math.random() * 100 + 1);
        guesses = []
        attempt = 10;
        guessLeft.innerHTML = `${attempt}`
        preGuess.innerHTML = ''
        result.innerHTML = '';
        userInput.removeAttribute('disabled')
        resultArea.removeChild(p)


        playGame = true;
    })
}