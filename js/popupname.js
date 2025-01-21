function nameOfPlayers() {
    const openPopup = document.getElementById("popup")
    document.getElementById("startGame").addEventListener("click", () => {
        openPopup.style.display = "block"
    })
}

function goButton() {
    const goButton = document.getElementById("go")
    goButton.addEventListener("click", (event) => {
        event.preventDefault()
        const namePlayer1 = document.getElementById("namePlayer1").value
        const namePlayer2 = document.getElementById("namePlayer2").value
        const namePlayer3 = document.getElementById("namePlayer3").value       
        const namePlayer4 = document.getElementById("namePlayer4").value
        sessionStorage.setItem("namePlayer1", namePlayer1)
        sessionStorage.setItem("namePlayer2", namePlayer2)
        sessionStorage.setItem("namePlayer3", namePlayer3)
        sessionStorage.setItem("namePlayer4", namePlayer4)
        window.location.href = "gameplay.html"
    })
}

function closePopup() {
    const closePopup = document.getElementById("popup")
    const closePopupButton = document.getElementById("close")
    closePopupButton.addEventListener("click", (event) => {
        event.preventDefault()
        closePopup.style.display = "none"
    })
}

document.addEventListener("DOMContentLoaded", () => {
    nameOfPlayers()
    closePopup()
    goButton()
})