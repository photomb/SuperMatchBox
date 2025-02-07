export function muted(muse) {
    createMuteButton()
    const muteButton = document.getElementById('mute')
    const muteSound = new Audio('./media/close.mp3')
    
    //Check the state of the mute button
    if (sessionStorage.getItem('isMuted') === 'true') {
        muse.pause()
        muteButton.style.backgroundImage = 'url("./media/volume-mute.png")'
    }

    muteButton.addEventListener('click', () => {
        if (!muse.paused) {
            muteSound.play()
            muse.pause()
            muteButton.style.backgroundImage = 'url("./media/volume-mute.png")'
            sessionStorage.setItem('isMuted', 'true')
        } else {
            muteSound.play()
            muse.play()
            muteButton.style.backgroundImage = 'url("./media/volume-on.png")'
            sessionStorage.setItem('isMuted', 'false')
        }
    })
}

function createMuteButton() {
    const muteButton = document.createElement('button')
    muteButton.id = 'mute'
    muteButton.classList.add('gameBtn')
    document.body.appendChild(muteButton)
}
