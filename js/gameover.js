import { resultGame } from "./start.js"
import { totalMatches, winner, gameTrack, arrNames } from "./gameplay.js"
import { gameOverExitButton, gameOverResetButton } from "./gameoverbutton.js"

export function gameOver() {
    if(totalMatches === 0) {
        let loser = gameTrack
        const shortSuccess = new Audio('./media/short-success.mp3')
        for (let y = 0; y < arrNames.length; y++) {
            if (loser == y + 1) {
                resultGame.style.display = 'block'
                resultGame.innerHTML = '<p class="resultloser">  🌀🌀 You lose ' + arrNames[y] + ' 🌀🌀</p>'
                resultGame.innerHTML += `<p class="resultwinner">⭐⭐⭐ ${winner}, you win ⭐⭐⭐</p>`
                shortSuccess.play()
            }
        }
        document.querySelectorAll('.choice').forEach(button => { 
            button.disabled = true
        })
        document.querySelectorAll('.special').forEach(button => { 
            button.disabled = true, button.style.opacity = 0.3
        })
        resultGame.innerHTML += `<br><button id="btnReset" class="gameBtn">New Game</button>&nbsp;`
        resultGame.innerHTML += `&nbsp;<button id="btnExit" class="gameBtn">Exit Game</button>`
        gameOverExitButton()
        gameOverResetButton()
        return
    }
}