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

getConditions()