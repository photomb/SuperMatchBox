export function fadeToWhite() {
    const blockFadeToWhite = document.createElement('div')
    blockFadeToWhite.id = 'fadetowhite'
    requestAnimationFrame(() => {
        blockFadeToWhite.classList.add('fade-in-white')
    })
    document.body.appendChild(blockFadeToWhite)
}