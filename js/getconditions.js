export function getConditions() {
    document.getElementById("startGame").addEventListener("click", () => {
    const getPlayers = document.getElementById("numberOfPlayers").value
    sessionStorage.setItem("numberOfPlayers", getPlayers)
    window.location.href = "gameplay.html"
    })
}

getConditions()