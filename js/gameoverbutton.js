import { fadeVolume, miiMusic } from "./fadevolume.js"

export function gameOverResetButton() {
    const resetButton = document.getElementById("btnReset")
    const resetSound = new Audio('./media/mouse-start.mp3')
    resetButton.addEventListener("click", () => {
        resetSound.play()
        resetSound.onended = () => {
            location.reload()
        }
        fadeVolume(miiMusic)
    })
}

export function gameOverExitButton() {
    const exitButton = document.getElementById("btnExit")
    const exitSound = new Audio('./media/correct.mp3')
    exitButton.addEventListener("click", () => {
        exitSound.play()
        exitSound.onended = () => {
            setTimeout(() => {
                location.replace('./index.html')
            }, 3000);
        }
        fadeVolume(miiMusic)
    })
}