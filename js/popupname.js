import { wiiMusic, fadeVolume } from "./fadevolume.js"

function nameOfPlayers() {
    const openPopup = document.getElementById("popup")
    document.getElementById("startGame").addEventListener("click", () => {
        openPopup.style.display = "block"
    })
}

function goButton() {
    const goButton = document.getElementById("go")
    const goBell = new Audio('./media/mouse-start.mp3')
    goButton.addEventListener("click", (event) => {
        event.preventDefault()

        //Player 1 //
        const inputPlayer1 = document.getElementById("namePlayer1")
        const namePlayer1 = inputPlayer1.value || inputPlayer1.placeholder

        //Player 2 //
        const inputPlayer2 = document.getElementById("namePlayer2")
        const namePlayer2 = inputPlayer2.value || inputPlayer2.placeholder

        //Player 3 //
        const inputPlayer3 = document.getElementById("namePlayer3")
        const namePlayer3 = inputPlayer3.value || inputPlayer3.placeholder
        
        // Player 4 //
        const inputPlayer4 = document.getElementById("namePlayer4")
        const namePlayer4 = inputPlayer4.value || inputPlayer4.placeholder

        // Save the names of the players in the sessionStorage //
        sessionStorage.setItem("namePlayer1", namePlayer1)
        sessionStorage.setItem("namePlayer2", namePlayer2)
        sessionStorage.setItem("namePlayer3", namePlayer3)
        sessionStorage.setItem("namePlayer4", namePlayer4)
        goBell.play()
        goBell.onended = () => {
            location.replace('./gameplay.html')
        }
        fadeVolume(wiiMusic)
    })
}

function closePopup() {
    const closePopup = document.getElementById("popup")
    const closePopupButton = document.getElementById("close")
    const closeSound = new Audio('./media/close.mp3')
    closePopupButton.addEventListener("click", (event) => {
        event.preventDefault()
        sessionStorage.clear()
        closeSound.play()
        closePopup.style.display = "none"
    })
}

document.addEventListener("DOMContentLoaded", () => {
    nameOfPlayers()
    closePopup()
    goButton()
})