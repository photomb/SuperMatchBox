export function muteButton() {
    const muteButton = document.getElementById('mute')
    const muteSound = new Audio('./media/correct.mp3')
    muteButton.addEventListener('click', () => {
        muteSound.play()
        fadeVolume(wiiMusic)
    })
}