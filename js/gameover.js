import { arrPlayers, resultGame } from "./start.js"
import { totalMatches, currentPlayer, winner, gameInfo } from "./gameplay.js"

export function gameOver() {
    if(totalMatches === 0) {
        let loser = (currentPlayer) % arrPlayers.length
        resultGame.innerHTML = `XxX YOU LOSE PLAYER ${loser} XxX`
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***<br>`
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        document.querySelectorAll('.special').forEach(button => { 
            button.style.opacity = 0
        })
        resultGame.innerHTML += `<button id="btnReset" onclick="location.reload()">New Game</button>`
        return
    }
}