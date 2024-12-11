import { displayMatches } from './displaymatches.js'
import { randomizeBtns, specialBtn } from './random.js'
import { arrPlayers, alertMessage, resultGame, gameButtons } from './start.js'

// Start Conditions //
export let totalMatches = 32
export let maxMatches = 6
export let numberOfPlayers = 4

// Gameplay //
export let currentPlayer = 0
export let winner = ''

// Function Gameplay which manage the flow of the game //
export function gamePlay(matches) {
    matches = parseInt(gameButtons)
    
    console.log('Number of matches : ' + matches, 'maxMatches : ' + maxMatches)
    
    // Warnings of the near end of the game //
    if (matches > totalMatches) {
        alertMessage.textContent = `Warning : only ${totalMatches} match(es) left`
        return
    }

    // Take matches //
    totalMatches -= matches
    displayMatches(matches)
    game.textContent = `Player ${arrPlayers[currentPlayer]} takes ${matches} match(es)`

    // New maxMatches value to dodge blocked situation //
    if (totalMatches <= 3) {
        maxMatches = 3;
    }

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

    // Change player //
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    resultGame.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`

    console.log('Current player : ' + arrPlayers[currentPlayer])
    
    // Winner //
    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    winner = arrWinners.join(', ')

    console.log('And the winner is : ' + winner)
}

//randomizeBtns()