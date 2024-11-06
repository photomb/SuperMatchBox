import { displayMatches } from './displaymatches.js'
import { arrPlayers, alertMessage, resultGame, gameButtons } from './start.js'

//Start Conditions
export let totalMatches = 16
export let maxMatches = 4
export let numberOfPlayers = 2

//Gameplay
export let currentPlayer = 0
export let winner = ''

export function gamePlay(matches) {

    matches = parseInt(gameButtons)
    console.log(matches)
    
    //to check if the input is a number
    if(isNaN(matches)) {
        alertMessage.textContent = "Please enter a number"
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
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***<br>`
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        resultGame.innerHTML += `<a href='gameplay.html'>Restart</a>`
        return
    }

    //change player
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    resultGame.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    
    //winner
    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    winner = arrWinners.join(', ')
    console.log(winner)
}