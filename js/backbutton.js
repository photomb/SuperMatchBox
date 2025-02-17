import { miiMusic, fadeVolume } from "./fadevolume.js"
import { fadeToWhite } from "./fadetowhite.js"

export function backButton() {
    const backTouch = document.getElementById('back')
    const backSound = new Audio('./media/correct.mp3')
    backTouch.addEventListener('click', () => {
        backSound.play()
        backSound.onended = () => {
            location.replace('./gameoptions.html')
        }
        fadeVolume(miiMusic)
        fadeToWhite()
    })
}