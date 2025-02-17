import { wiiSports, fadeVolume } from "./fadevolume.js"
import { fadeToWhite } from "./fadetowhite.js"

function sendSessionStorage() {
    sessionStorage.setItem('players', 2)
    sessionStorage.setItem('totalMatches', 12)
    sessionStorage.setItem('maxMatches', 3)
    sessionStorage.setItem("namePlayer1", 'Match')
    sessionStorage.setItem("namePlayer2", 'Box')
}

export function quickGame() {
    const quickGame = document.getElementById('quickGame');
    const mouseQuick = new Audio ('./media/mouse-start.mp3')
    quickGame.addEventListener('click', () => {
        sendSessionStorage()
        mouseQuick.play()
        mouseQuick.onended = () => {
            location.replace('./gameplay.html')
        }
        fadeVolume(wiiSports)
        fadeToWhite()
    })
}