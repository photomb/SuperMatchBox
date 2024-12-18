import { totalMatches } from "./gameplay.js"
import { resultGame } from "./start.js"
import { currentPlayer, winner } from "./gameplay.js"
import { arrPlayers } from "./start.js"

export function gameOver() {
    if(totalMatches == 0) {
        resultGame.innerHTML = `XxX YOU LOSE PLAYER ${arrPlayers[currentPlayer]} XxX<br>`
        resultGame.innerHTML += `<br>*** PLAYER(S) ${winner} YOU WIN ***<br>`
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        document.querySelectorAll('.special').forEach(button => { 
            button.style.opacity = 0
        })
        resultGame.innerHTML += `<a href='gameplay.html'>Restart</a>`
        return
    }
}