import { arrPlayers, resultGame } from "./start.js"
import { totalMatches, currentPlayer, winner, gameTrack } from "./gameplay.js"

export function gameOver() {
    if(totalMatches === 0) {
        let loser = gameTrack
        resultGame.innerHTML = `XxX YOU LOSE PLAYER ${loser} XxX<br>`
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***<br>`
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        document.querySelectorAll('.special').forEach(button => { 
            button.style.opacity = 0
        })
        resultGame.innerHTML += `<br><button id="btnReset" class="gameBtn" onclick="location.reload()">New Game</button>`
        return
    }
}