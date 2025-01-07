function getConditions() {
    document.getElementById("startGame").addEventListener("click", () => {
        const getPlayers = document.getElementById("numberOfPlayers").value
        const getTotalMatches = document.getElementById("totalMatches").value
        const getMaxMatches = document.getElementById("maxMatches").value
        sessionStorage.setItem("numberOfPlayers", getPlayers)
        sessionStorage.setItem("totalMatches", getTotalMatches)
        sessionStorage.setItem("maxMatches", getMaxMatches)
        window.location.href = "gameplay.html"
    })
}

function nameOfPlayers() {
    document.getElementById("startGame").addEventListener("click", () => {
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

function displayPlayers() {
    const getPlayers = document.getElementById("numberOfPlayers").value
    const num = sessionStorage.setItem("numberOfPlayers", getPlayers)
    if (getPlayers == 3) {
        document.getElementById("label3").style.display = "display"
        document.getElementById("label4").style.display = "none"
    } else if (getPlayers == 4) {
        document.getElementById("label3").style.display = "display"
        document.getElementById("label4").style.display = "display"
    } else {
        document.getElementById("label3").style.display = "none"
        document.getElementById("label4").style.display = "none"
    }
}

getConditions()
nameOfPlayers()