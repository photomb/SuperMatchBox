export function creditsShow() {
    const creditsTags = document.getElementById('credits')
    const creditsButton = document.getElementById('?')
    creditsButton.addEventListener('click', (event) => {
        event.preventDefault()
        creditsTags.style.display = "block"
    })
}

export function creditsPop() {
    let creditsWindow = document.createElement('div')
    creditsWindow.className = "credits"
    creditsWindow.style.position = "absolute"
    creditsWindow.left = '50%'
    creditsWindow.top = '25%'
    creditsWindow.border = '1px solid black'
    creditsWindow.width = '50%'
    creditsWindow.height = 'auto'
    creditsWindow.padding = '10px'
    creditsWindow.backgroundColor = 'white'
    creditsWindow.zIndex = '100'
    creditsWindow.innerHTML = 'Credits Sound : Nintendo & https://pixabay.com/'
    body.appendchild(creditsWindow)
}