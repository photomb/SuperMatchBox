import { displayMatches } from './displaymatches.js'
import { arrPlayers, alertMessage, resultGame, gameButtons } from './start.js'

//Start Conditions
export let totalMatches = 24
export let maxMatches = 6
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
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
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