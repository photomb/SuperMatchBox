export function arrowScroll() {
    const isScrollable = document.documentElement.scrollHeight > window.innerHeight
    const arrow = document.createElement("button")
    arrow.id = "arrow"
    arrow.classList.add("gameBtn")
    arrow.style.display = "inline" //none if size...
    arrow.style.zIndex = 1
    arrow.style.position = "fixed"
    arrow.style.right = "2%"
    arrow.style.bottom = "2%"
    arrow.style.cursor = "pointer"
    arrow.style.backgroundImage = "url('./img/arrow.png')"
    arrow.style.backgroundSize = "60%"
    arrow.style.backgroundRepeat = "no-repeat"
    arrow.style.backgroundPosition = "center"
    arrow.style.width = "2cap"
    arrow.style.height = "3cap" 
    arrow.addEventListener("click", () => {
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        })
    })
    document.body.appendChild(arrow)
    
    if (isScrollable) {
        arrow.style.display = "inline"
    } else {
        arrow.style.display = "none"
    }
}