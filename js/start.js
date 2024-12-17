import { gamePlay, numberOfPlayers } from './gameplay.js'
import { displayMatches } from './displaymatches.js'

//Players Management//
export let arrPlayers = []

// DOM  elements //
export const totalMatchesContainer = document.getElementById("totalMatches")
export const showPlayer = document.getElementById("player")
export const game = document.getElementById("game")
export const resultGame = document.getElementById("resultGame")
export const alertMessage = document.getElementById("alertMessage")
export let gameButtons = 0

// Number of players //
for (let n = 1; n <= numberOfPlayers; n++) {
    arrPlayers.push(n)
}

// Screen initialization //
displayMatches()

// Add event listeners //
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gamePlay() // Call the gameplay function //
    })
})

document.querySelectorAll('.special').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gameButtons = document.getElementById('btn4').style.opacity = 0
        gamePlay() // Call the gameplay function //
    })
})