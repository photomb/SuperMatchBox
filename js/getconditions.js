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

getNumberOfPlayers()
getTotalMatches()
getMaxMatches()