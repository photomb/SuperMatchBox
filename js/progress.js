document.addEventListener("DOMContentLoaded", () => {
    const videoBG = document.getElementById("background-video")
    const audioIndex = document.getElementById("wiiSports")
    const letsPlayButton = new Audio('./media/mouse-start.mp3')
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

    const preloadSounds = [
        '../media/blip.mp3',
        '../media/close.mp3',
        '../media/correct.mp3',
        '../media/menu-selection.mp3',
        '../media/mouse-special.mp3',
        '../media/mouse-start.mp3',
        '../media/short-success.mp3',
        '../media/special.mp3'
    ]

    let progress = 0
    let videoLoaded = false
    let audioLoaded = false
    let fontsLoaded = false
    let imagesLoadedCount = 0
    let soundsLoadedCount = 0

    sessionStorage.clear()

    function updateProgress() {
        progress = 0
        
        if (videoLoaded) progress += 35
        if (audioLoaded) progress += 25
        if (fontsLoaded) progress += 10
        if (imagesLoadedCount === preloadImages.length) progress += 15
        if (soundsLoadedCount === preloadSounds.length) progress += 15

        console.log(`progress : ${progress}`)
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
                audio.play()
                audio.volume = 0.3
                audio.loop = true
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
        }
    })

    //Are sounds ready ?
    preloadSounds.forEach(sound => {
        if(sessionStorage.getItem(sound)) {
            soundsLoadedCount++
            updateProgress()
        } else {
            const audio = new Audio(sound)
            audio.oncanplay = () => {
                soundsLoadedCount++
                sessionStorage.setItem(sound, "true") //Onload sound ok
                sessionStorage.setItem("soundsLoadedCount", soundsLoadedCount)
                updateProgress()
            }
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
        })
        .catch((zut) => {
            console.error("Error loading fonts:", zut)
        })
    }
})