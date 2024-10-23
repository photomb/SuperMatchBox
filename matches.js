//Start Conditions
let totalMatches = 15
let numberOfPlayers = 4
let maxMatches = 5

//Players Management
let arrPlayers = []
let currentPlayer = 0
let winner = ''

//DOM  elements
const totalMatchesContainer = document.getElementById("totalMatches")
const totalMatchesViz = document.getElementById("totalMatchesViz")
const showPlayer = document.getElementById("player")
const inputNumberMatches = document.getElementById("takeMatches")
const takeMatchesButton = document.getElementById("takeMatchesButton")
const game = document.getElementById("game")
const resultGame = document.getElementById("resultGame")
const alertMessage = document.getElementById("alertMessage")

//Number of players
for (let n = 1; n <= numberOfPlayers; n++) {
    arrPlayers.push(n)
}
console.log(arrPlayers)

function displayMatches() {
    //start conditions displayed
    totalMatchesContainer.textContent = `Total matches remaining : ${totalMatches}`
    showPlayer.textContent = `Number of players : ${numberOfPlayers}`
    resultGame.textContent = `Your turn Player ${arrPlayers[currentPlayer]}`

    //materialize matches for graphic interface
    for(let i = 0; i < totalMatches; i++) {
        const match = document.createElement('div');
        match.classList.add('matchVisu')
        match.textContent = '!'
        totalMatchesViz.appendChild(match)
    }
}

//matches is the number of matches you get
function gamePlay(matches) {

    alertMessage.textContent = ''
    
    matches = parseInt(inputNumberMatches.value)
    
    //to check if the input is a number
    if(isNaN(matches)) {
        alertMessage.textContent = "Please enter a number"
        return
    }

    if(matches < 1 || matches > maxMatches) {
        alertMessage.textContent = `You only could take from 1 to ${maxMatches} matches`
        return
    }

    if (matches > totalMatches) {
        alertMessage.textContent = `Warning : only ${totalMatches} match(es) left`
        return
    }

    //take matches
    totalMatches -= matches
    displayMatches(matches)
    game.textContent = `Player ${arrPlayers[currentPlayer]} takes ${matches} match(es)`

    //check the game over
    if(totalMatches == 0) {
        resultGame.innerHTML = `XxX YOU LOSE PLAYER ${arrPlayers[currentPlayer]} XxX<br>`
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***`
        takeMatchesButton.disabled = true
        inputNumberMatches.disabled = true
        return
    }
    
    //clear field game
    inputNumberMatches.value = ''
    
    //change player
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    resultGame.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    
    //winner
    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    winner = arrWinners.join(', ')
    console.log(winner)
}

// Screen initialization
displayMatches()

// Add event listeners
takeMatchesButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (if inside a form)
    gamePlay(); // Call the gameplay function
});