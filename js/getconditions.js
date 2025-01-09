function getConditions() {
    document.getElementById("startGame").addEventListener("click", () => {
        //choose number of players //
        const players = document.getElementsByName("players")
        let getPlayers = 0
        for(let i = 0; i < players.length; i++) {
            if(players[i].checked) {
                getPlayers = players[i].value
                break
            }
        }
        //choose total number of matches //
        const totalMatches = document.getElementsByName("totalMatches")
        let getTotalMatches = 0
        for (let m = 0; m < totalMatches.length; m++) {
            if(totalMatches[m].checked) {
                getTotalMatches = totalMatches[m].value
                break
            }
        }
        //choose max number of matches //
        const maxMatches = document.getElementsByName("maxMatches")
        let getMaxMatches = 0
        for (let p = 0; p < maxMatches.length; p++) {
            if(maxMatches[p].checked) {
                getMaxMatches = maxMatches[p].value
                break
            }
        }
        // set and send results to sessionStorage //
        sessionStorage.setItem("players", getPlayers)
        sessionStorage.setItem("totalMatches", getTotalMatches)
        sessionStorage.setItem("maxMatches", getMaxMatches)
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

// function displayPlayers() {
//     const players = document.getElementById("players").value
//     if (players === 3) {
//         document.getElementById("label3").style.display = "display"
//         document.getElementById("label4").style.display = "none"
//     } else if (players === 4) {
//         document.getElementById("label3").style.display = "display"
//         document.getElementById("label4").style.display = "display"
//     } else {
//         document.getElementById("label3").style.display = "none"
//         document.getElementById("label4").style.display = "none"
//     }
// }

getConditions()
nameOfPlayers()