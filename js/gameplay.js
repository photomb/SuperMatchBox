import { displayMatches } from './displaymatches.js'
import { gameOver } from './gameover.js'
import { arrPlayers, alertMessage, gameButtons, game, specialMessage } from './start.js'

// Start Conditions //
export let totalMatches = sessionStorage.getItem("totalMatches")
export let numberOfPlayers = sessionStorage.getItem("players")
export let maxMatches = sessionStorage.getItem("maxMatches")

// Name of players //
export const namePlayer1 = sessionStorage.getItem("namePlayer1")
export const namePlayer2 = sessionStorage.getItem("namePlayer2")
export const namePlayer3 = sessionStorage.getItem("namePlayer3")
export const namePlayer4 = sessionStorage.getItem("namePlayer4")
export const arrNames = [namePlayer1, namePlayer2, namePlayer3, namePlayer4]
console.log(arrNames)

// Gameplay //
export let currentPlayer = 0
export let winner = ''
export let gameTrack = ''
export let totalMatchesTrack = 0

// Function Gameplay that manage the flow of the game //
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
    gameTrack = arrPlayers[currentPlayer]
    for (let x = 0; x < arrNames.length; x++) {
        if (gameTrack == x + 1) {
            alertMessage.textContent = arrNames[x] + ' takes ' + matches + ' match(es)'
            console.log("potential loser : " + arrNames[x])
        }
        if (totalMatches <= 9) {
            specialMessage.textContent = "Careful, near the end"
            maxMatches = 3
        }
    }
    
    
    // Player Turn//
    currentPlayer = (currentPlayer +1) % numberOfPlayers
    for (let w = 0; w < arrNames.length; w++) {
        if (arrPlayers[currentPlayer] == w + 1) {
            game.innerHTML = 'Your turn ' + '<span class="playerturn">' + arrNames[w] + '</span'
            console.log('Current Player : ' + arrNames[w])
        }
    }

    // Game Over //
    gameOver()
    
    // Winner //
    const nameList = new Map()
    nameList.set(1, namePlayer1)
    nameList.set(2, namePlayer2)
    nameList.set(3, namePlayer3)
    nameList.set(4, namePlayer4)
    nameList.length = 4

    let arrWinners = arrPlayers.filter((player) => player != arrPlayers[currentPlayer])
    const newArrWinners = arrWinners.map(nameList.get, nameList)
    winner = newArrWinners.join(', ')
 
    console.log('Number of matches : ' + matches, '| maxMatches : ' + maxMatches, '| totalMatches : ' + totalMatches)
}