import { totalMatchesContainer, showPlayer, game, arrPlayers } from './start.js'
import { totalMatches, numberOfPlayers, currentPlayer, namePlayer1 } from './gameplay.js'
import { randomizeBtns, specialBtn } from './random.js'

// Start Displayed Game Interface //
export function displayMatches() {
    totalMatchesContainer.innerHTML = `${totalMatches}<img src="./img/match.png" alt="match" class="matchVisu">`
    showPlayer.textContent = `Number of players : ${numberOfPlayers}`
    game.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}` // in start game, first player annonced //
    if (arrPlayers[currentPlayer] == 1) {
        game.textContent = `Your turn ${namePlayer1}`
    } else {
        game.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    }
    randomizeBtns()
    specialBtn()
    
}
