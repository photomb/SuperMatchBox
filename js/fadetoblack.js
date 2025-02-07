export function fadeToBlack() {
    const blockFadeToBlack = document.createElement('div')
    blockFadeToBlack.id = 'fadetoblack'
    requestAnimationFrame(() => {
        blockFadeToBlack.classList.add('fade-in')
    })
    document.body.appendChild(blockFadeToBlack)
}