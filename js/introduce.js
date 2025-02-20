import { creditsContent, closeCredits } from "./credits.js"
import { wiiSports, fadeVolume } from "./fadevolume.js"
import { quickGame } from "./quickgame.js"
import { muted } from "./mutebutton.js";
import { fadeToWhite } from "./fadetowhite.js";

// Init all game with clear cache //
sessionStorage.clear()

function goToGameOptionsButton() {
    const start = document.getElementById('start');
    const mouseStart = new Audio ('./media/mouse-start.mp3')
    start.addEventListener('click', () => {
        mouseStart.play()
        mouseStart.onended = () => {
            location.replace('./gameoptions.html')
        }
        fadeToWhite()
        fadeVolume(wiiSports)
    })
}

function creditsPop() {
    const creditsButton = document.getElementById('credits');
    let credits = document.querySelector('.upCredits')
    if (!credits) {
        creditsContent()
        credits = document.querySelector('.upCredits')
    }
    const mouseCred = new Audio ('./media/correct.mp3')
    creditsButton.addEventListener('click', () => {
        mouseCred.play()
        credits.style.display = 'block'
    })
}

goToGameOptionsButton()
quickGame()
creditsPop()
closeCredits()
muted(wiiSports)