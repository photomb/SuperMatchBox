import { totalMatchesContainer, showPlayer, resultGame, arrPlayers } from './start.js'
import { totalMatches, numberOfPlayers, currentPlayer } from './gameplay.js'

export function displayMatches() {
    //start conditions displayed
    totalMatchesContainer.innerHTML = `<br>Total matches remaining : ${totalMatches}<br>`
    showPlayer.textContent = `Number of players : ${numberOfPlayers}`
    resultGame.textContent = `Your turn Player ${arrPlayers[currentPlayer]}`

    //materialize matches for graphic interface
    for(let i = 0; i < totalMatches; i++) {
        const match = document.createElement('div');
        match.classList.add('matchVisu')
        match.textContent = '!'
        totalMatchesContainer.appendChild(match)
    }
}