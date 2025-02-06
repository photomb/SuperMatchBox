export function creditsContent() {
    let creditsWindow = document.createElement('div')
    creditsWindow.className = 'upCredits'
    creditsWindow.innerHTML = `
    <p>
        <h4>Credits Sounds</h4> 
        <ul>
            <li>Nintendo® WiiSports® Theme by Kazumi Tokata</li>
            <li>Nintendo® Wii® Home Page Theme by Kenta Nagata, Toru Minegishi and Mahito Yokota<br></li>
            <li>Nintendo® Mii® Channel Theme by Moisés Nieto<br></li>
            <li>All sound effects come from<br>contributors of <a href="https://pixabay.com/" target="_blank">Pixabay.com</a></li>
        </ul>
    </p>
    <button id='closeCreditsButton' class="gameBtn closeBtn"></button>`
    document.body.appendChild(creditsWindow)
}

export function closeCredits() {
    const creditsContentWindows = document.querySelector('.upCredits')
    const closeCreditsButton = document.getElementById('closeCreditsButton')
    const closeSoundCredits = new Audio('./media/close.mp3')
    closeCreditsButton.addEventListener('click', () => {
        closeSoundCredits.play()
        creditsContentWindows.style.display = 'none'
    })
}