import { gamePlay, numberOfPlayers } from './gameplay.js'
import { displayMatches } from './displaymatches.js'

//Players Management
export let arrPlayers = []

//DOM  elements
export const totalMatchesContainer = document.getElementById("totalMatches")
export const showPlayer = document.getElementById("player")
//export const inputNumberMatches = document.getElementById("takeMatches")
//export const takeMatchesButton = document.getElementById("takeMatchesButton")
export const game = document.getElementById("game")
export const resultGame = document.getElementById("resultGame")
export const alertMessage = document.getElementById("alertMessage")
export let gameButtons = 0
console.log(gameButtons)
//Number of players
for (let n = 1; n <= numberOfPlayers; n++) {
    arrPlayers.push(n)
}
console.log(arrPlayers)

// Screen initialization
displayMatches()

// Add event listeners
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event
        gamePlay() // Call the gameplay function
    })
})

// takeMatchesButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission (if inside a form)
//     gamePlay(); // Call the gameplay function
// });