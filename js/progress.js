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
    let imagesLoaded = false

    function updateProgress() {
        progress = 0
        
        if (videoLoaded) progress += 40
        if (audioLoaded) progress += 30
        if (fontsLoaded) progress += 10
        if (imagesLoaded) progress += 20

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
                videoBG.play()
            })
        }
    }

    //Are images ready ?
    function imagesToLoad(src) {
        return new Promise((resolve) => {
            if (localStorage.getItem(src)) {
                resolve(src) //image loaded yet
            } else {
                const image = new Image()
                image.src = src
                image.onload = () => {
                    localStorage.setItem(src, "true") //loading image
                    resolve(src)
                }
            }
        })
    }

    Promise.all(preloadImages.map(imagesToLoad))
    .then(() => {
        imagesLoaded = true
        localStorage.setItem("imagesLoaded", "true")
        updateProgress()
        console.log("IMAGES OK")
    })

    //Is video ready ?
    function VideoToLoad(videoMedia) {
        return new Promise((resolve) => {
            if(localStorage.getItem("videoLoaded")) {
                resolve("video")
            } else {
                videoMedia.addEventListener("canplay", () => {
                    localStorage.setItem("videoLoaded", "true")
                    resolve("video")
                })
            }
        })
    }

    VideoToLoad(videoBG)
        .then(() => {
            videoLoaded = true
            localStorage.setItem("videoLoaded", "true")
            console.log("VIDEO OK")
            updateProgress()
        })
        .catch((err) => console.warn(err))


    //Is audio ready ?
    function AudioToLoad(audioMedia) {
        return new Promise((resolve) => {
            if(localStorage.getItem("audioLoaded")) {
                resolve("audio")
            } else {
                audioMedia.addEventListener("canplay", () => {
                    localStorage.setItem("audioLoaded", "true")
                    resolve("audio")
                })
            }
        })
    }

    AudioToLoad(audioIndex)
        .then(() => {
            audioLoaded = true
            localStorage.setItem("audioLoaded", "true")
            console.log("AUDIO OK")
            updateProgress()
        })
        .catch((err) => console.warn(err))

    // Is fonts ready ?
    if(!fontsLoaded) {
        const fontSuperMario256 = new FontFace('SuperMario256', 'url("./fonts/SuperMario256.ttf")')
        const fontReglisse = new FontFace('Reglisse', 'url("./fonts/Reglisse.otf")')
        const fontReglisseBack = new FontFace('Reglisse-Back', 'url("./fonts/Reglisse_Back.otf")')
        const fontReglisseFill = new FontFace('Reglisse-Fill', 'url("./fonts/Reglisse_Fill.otf")')

        Promise.all([fontSuperMario256.load(), fontReglisse.load(), fontReglisseBack.load(), fontReglisseFill.load()])
        .then(() => {
            fontsLoaded = true
            localStorage.setItem("fontsLoaded", "true")
            updateProgress()
            console.log("FONTS OK")
        })
        .catch((zut) => {
            console.error("Error loading fonts : ", zut)
        })
    }
})