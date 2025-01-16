function getNumberOfPlayers() { //choose number of players //
    document.getElementById("startGame").addEventListener("click", () => {
        const players = document.getElementsByName("players")
        let getPlayers = 0
        for(let i = 0; i < players.length; i++) {
            if(players[i].checked) {
                getPlayers = players[i].value
                break
            }
        }
        sessionStorage.setItem("players", getPlayers)
    })
}

function getTotalMatches() { //choose total number of matches //
    document.getElementById("startGame").addEventListener("click", () => {
        const totalMatches = document.getElementsByName("totalMatches")
        let getTotalMatches = 0
        for (let m = 0; m < totalMatches.length; m++) {
            if(totalMatches[m].checked) {
                getTotalMatches = totalMatches[m].value
                break
            }
        }
        sessionStorage.setItem("totalMatches", getTotalMatches)
    })
}

function getMaxMatches() { //choose max number of matches //
    document.getElementById("startGame").addEventListener("click", () => {
        const maxMatches = document.getElementsByName("maxMatches")
        let getMaxMatches = 0
        for (let p = 0; p < maxMatches.length; p++) {
            if(maxMatches[p].checked) {
                getMaxMatches = maxMatches[p].value
                break
            }
        }
        sessionStorage.setItem("maxMatches", getMaxMatches)
     })
}

function nameOfPlayers() {
    const openPopupButton = document.getElementById("popup")
    const goButton = document.getElementById("go")
    const xButton = document.getElementById("close")
    document.getElementById("startGame").addEventListener("click", () => {
        const namePlayer1 = document.getElementById("namePlayer1").value
        const namePlayer2 = document.getElementById("namePlayer2").value
        const namePlayer3 = document.getElementById("namePlayer3").value       
        const namePlayer4 = document.getElementById("namePlayer4").value
        sessionStorage.setItem("namePlayer1", namePlayer1)
        sessionStorage.setItem("namePlayer2", namePlayer2)
        sessionStorage.setItem("namePlayer3", namePlayer3)
        sessionStorage.setItem("namePlayer4", namePlayer4)
        openPopupButton.style.display = "block"
    })
}

getNumberOfPlayers()
getTotalMatches()
getMaxMatches()
nameOfPlayers()