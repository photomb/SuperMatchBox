import { displayMatches } from './displaymatches.js'
import { arrPlayers, alertMessage, resultGame, gameButtons } from './start.js'

// Start Conditions //
export let totalMatches = 24
export let maxMatches = 4
export let numberOfPlayers = 2

// Gameplay //
export let currentPlayer = 0
export let winner = ''

// Function Gameplay which manage the flow of the game //
export function gamePlay(matches) {
    
    matches = parseInt(gameButtons)
    
    // Warnings of the near end of the game //
    if (matches > totalMatches) {
        alertMessage.textContent = `Warning : only ${totalMatches} match(es) left`
        return
    }
    
    // Take matches //
    totalMatches -= matches
    displayMatches(matches)
    game.textContent = `Player ${arrPlayers[currentPlayer]} takes ${matches} match(es)`


    // Check the game over //
    if(totalMatches == 0) {
        resultGame.innerHTML = `XxX YOU LOSE PLAYER ${arrPlayers[currentPlayer]} XxX<br>`
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***<br>`
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        resultGame.innerHTML += `<a href='gameplay.html'>Restart</a>`
        return
    }
    
    // Player Turn//
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    resultGame.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    
    console.log('Current player : ' + arrPlayers[currentPlayer])
    
    // Winner //
    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    winner = arrWinners.join(', ')
    
    console.log('Number of matches : ' + matches, '| maxMatches : ' + maxMatches, '| totalMatches : ' + totalMatches)
}