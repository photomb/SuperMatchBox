import { totalMatchesContainer, showPlayer, resultGame, arrPlayers } from './start.js'
import { totalMatches, numberOfPlayers, currentPlayer } from './gameplay.js'
import { randomizeBtns, specialBtn } from './random.js'

// Start Displayed Game Interface //
export function displayMatches() {
    totalMatchesContainer.innerHTML = `${totalMatches}<img src="./img/match.png" alt="match" class="matchVisu">`
    showPlayer.textContent = `Number of players : ${numberOfPlayers}`
    resultGame.textContent = `Your turn Player ${arrPlayers[currentPlayer]}`
    
    randomizeBtns()
    specialBtn()
}
