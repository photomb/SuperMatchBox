import { wiiSports } from "./fadevolume.js"

function muteButton() {
    const muteButton = document.getElementById('mute')
    const muteSound = new Audio('./media/close.mp3')
    muteButton.addEventListener('click', () => {
        muteSound.play()
        wiiSports.pause()
    })
}

export function createMuteButton() {
    const muteButton = document.createElement('button')
    muteButton.id = 'mute'
    muteButton.classList.add('gameBtn')
    document.body.appendChild(muteButton)
}