import { totalMatchesContainer, showPlayer, game, arrPlayers } from './start.js'
import { totalMatches, numberOfPlayers, currentPlayer, namePlayer1, maxMatches } from './gameplay.js'
import { randomizeBtns, specialBtn } from './random.js'

// Start Displayed Game Interface //
export function displayMatches() {
    const gameMatches = sessionStorage.getItem("totalMatches")
    totalMatchesContainer.innerHTML = `${totalMatches}<img src="./img/match.png" alt="match" class="matchVisu">`
    showPlayer.textContent = `Game Conditions : 👤${numberOfPlayers} | 🪔${gameMatches} | 🔥${maxMatches}`
    // in start game, first player annonced //
    if (arrPlayers[currentPlayer] == 1) {
        game.innerHTML = `Your turn <span class='playerturn'>${namePlayer1}</span>`
    } else {
        game.textContent = `Your turn PLAYER ${arrPlayers[currentPlayer]}`
    }
    randomizeBtns()
    specialBtn()
    
}