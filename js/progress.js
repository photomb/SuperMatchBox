document.addEventListener("DOMContentLoaded", () => {
    const videoBG = document.getElementById("background-video")
    const audioIndex = document.getElementById("wiiSports")
    const letsPlayButton = new Audio('../media/mouse-start.mp3')
    const preloader = document.getElementById("preloader")
    const progressFill = document.querySelector(".progress-fill")
    const loadingText = document.getElementById("loading-text")
    const sendGameButton = document.getElementById("sendGameButton")
    const preloadImages = [
        '../img/close.png',
        '../img/joker.png',
        '../img/match.png',
        '../img/splash_white_screen.png',
        '../img/volume-mute.png',
        '../img/volume-on.png',
        '../media/twinkle.gif'
    ]

    let progress = 0
    let videoLoaded = false
    let audioLoaded = false
    let fontsLoaded = false
    let imagesLoadedCount = 0

    sessionStorage.clear()

    function updateProgress() {
        progress = 0
        
        if (videoLoaded) progress += 50
        if (audioLoaded) progress += 25
        if (fontsLoaded) progress += 10
        if (imagesLoadedCount === preloadImages.length) progress += 15

        progressFill.style.width = `${progress}%`
        loadingText.textContent = `Loading ... ${progress}%`


        // sendGameButton & check if everything is ready //
        if (progress >= 100) {
            loadingText.textContent = "Done !"
            sendGameButton.style.opacity = 1

            sendGameButton.addEventListener("click", () => {
                requestAnimationFrame(() => {
                    preloader.classList.add("fade-out")
                    setTimeout(() => {
                        preloader.style.display = "none"
                        sendGameButton.style.display = "none"
                    }, 1000)
                })
                letsPlayButton.play()
                audioIndex.play()
                audioIndex.volume = 0.3
                audioIndex.loop = true
            })
        }
    }

    //Are images ready ?
    preloadImages.forEach(src => {
        if(sessionStorage.getItem(src)) {
            imagesLoadedCount++
            updateProgress()
        } else {
            const img = new Image()
            img.src = src
            img.onload = () => {
                imagesLoadedCount++
                sessionStorage.setItem(src, "true") //Onload image ok 
                sessionStorage.setItem("imagesLoadedCount", imagesLoadedCount)
                updateProgress()
            }
            console.log("Images ok")
        }
    })

    //Is video ready ?
    const onVideoload = () => {
        if (!videoLoaded) {
            videoLoaded = true
            sessionStorage.setItem("videoLoaded", "true")
            updateProgress()
        }
    }
    if (videoBG.readyState >= 3) onVideoload() //3 = HAVE_FUTURE_DATA for readyState
    videoBG.addEventListener("canplay", () => { videoLoaded = true })
    videoBG.addEventListener("canplaythrough", () => { videoLoaded = true })
    console.log("Video ok")

    //Is audio ready ?
    const onAudioLoad = () => {
        if(!audioLoaded) {
            audioLoaded = true
            sessionStorage.setItem("audioLoaded", "true")
            updateProgress()
        }
    }
    if (audioIndex.readyState >= 3) onAudioLoad()
        audioIndex.addEventListener("canplay", () => { audioLoaded = true })
        audioIndex.addEventListener("canplaythrough", () => { audioLoaded = true })
        console.log("Audio ok")

    // Is fonts ready ?
    if(!fontsLoaded) {
        const fontSuperMario256 = new FontFace('SuperMario256', 'url("./fonts/SuperMario256.ttf")')
        const fontReglisse = new FontFace('Reglisse', 'url("./fonts/Reglisse.otf")')
        const fontReglisseBack = new FontFace('Reglisse-Back', 'url("./fonts/Reglisse_Back.otf")')
        const fontReglisseFill = new FontFace('Reglisse-Fill', 'url("./fonts/Reglisse_Fill.otf")')

        Promise.all([fontSuperMario256.load(), fontReglisse.load(), fontReglisseBack.load(), fontReglisseFill.load()])
        .then(() => {
            fontsLoaded = true
            sessionStorage.setItem("fontsLoaded", "true")
            updateProgress()
            console.log("Fonts ok")
        })
        .catch((zut) => {
            console.error("Error loading fonts:", zut)
        })
    }
})