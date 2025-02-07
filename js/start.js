import { gamePlay, numberOfPlayers } from './gameplay.js'
import { displayMatches } from './displaymatches.js'
import { backButton } from './backbutton.js'
import { miiMusic } from "./fadevolume.js"
import { muted } from './mutebutton.js'

// DOM  elements //
export const totalMatchesContainer = document.getElementById("totalMatches")
export const showPlayer = document.getElementById("gameConditions")
export const game = document.getElementById("game")
export const resultGame = document.getElementById("resultGame")
export const alertMessage = document.getElementById("alertMessage")
export const specialMessage = document.getElementById("specialMessage")
export const mouseClick = new Audio ('./media/blip.mp3')
export const mouseSpecial = new Audio ('./media/mouse-special.mp3')
export let gameButtons = 0

// manage audio //
miiMusic.play()
miiMusic.volume = 0.3
miiMusic.loop = true

// Number of players //
export let arrPlayers = []
for (let n = 1; n <= numberOfPlayers; n++) {
    arrPlayers.push(n)
}
console.log(arrPlayers)

// Screen initialization //
displayMatches()

// Add event listeners with classics game buttons //
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gamePlay() // Call the gameplay function //
        mouseClick.play() // Play the sound of the mouse click //
    })
})

// Add event listeners with special game button //
document.querySelectorAll('.special').forEach(button => {
    button.addEventListener('click', function(event) {
        gameButtons = parseInt(event.target.value) // Get the value of the clicked event //
        gameButtons = document.getElementById('btn4').style.opacity = 0
        gamePlay() // Call the gameplay function //
        mouseSpecial.play() // Play the sound of the mouse click //
    })
})

backButton()
muted(miiMusic)
