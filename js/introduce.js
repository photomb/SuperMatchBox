//import { creditsPop } from "./credits.js"
import { wiiSports, fadeVolume } from "./fadevolume.js"
import { quickGame } from "./quickgame.js"

function letStart() {
    const start = document.getElementById('start');
    const mouseStart = new Audio ('./media/mouse-start.mp3')
    start.addEventListener('click', () => {
        mouseStart.play()
        mouseStart.onended = () => {
            location.replace('./gameoptions.html')
        }
        fadeVolume(wiiSports)
    })
}

function creditsPop() {
    const credits = document.getElementById('credits');
    const mouseCred = new Audio ('./media/correct.mp3')
    credits.addEventListener('click', () => {
        mouseCred.play()
        mouseCred.onended = () => {
            credits.style.display = "block"
        }
    })
}

letStart()
quickGame()
creditsPop()