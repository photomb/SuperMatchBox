document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video")
    const audio = new Audio('./media/WiiSports.mp3')
    const preloader = document.getElementById("preloader")
    const progressFill = document.querySelector(".progress-fill")
    const loadingText = document.getElementById("loading-text")

    let videoLoaded = false
    let audioLoaded = false
    let fontsLoaded = false

    function updateProgress() {
        let progress = 0
        
        if (videoLoaded) {
            progress += 50
            console.log('video ok')
        }

        if (audioLoaded) {
            progress += 30
            console.log('audio ok')
        }

        if (fontsLoaded) {
            progress += 20
            console.log('fonts ok')
        }

        console.log(`progress : ${progress}`)
        progressFill.style.width = `${progress}%`
        loadingText.textContent = `Loading ... ${progress}%`

        if (progress == 100) {
            setTimeout(() => {
                preloader.style.opacity = "0"
                setTimeout(() => preloader.style.display = "none", 500)
            }, 500)
        }
    }

    // Is video ready ?
    video.addEventListener("progress", () => {
        if (video.readyState >= 3) { // 3 = HAVE_FUTURE_DATA for readyState
            videoLoaded = true
            updateProgress()
        }
    })

    video.addEventListener("canplaythrough", () => {
        videoLoaded = true
        updateProgress()
    })

    // Is audio ready ?
    audio.addEventListener("progress", () => {
        if (audio.readyState >= 3) { // 3 = HAVE_FUTURE_DATA for readyState
            audioLoaded = true
            updateProgress()
        }
    })

    audio.addEventListener("canplaythrough", () => {
        audioLoaded = true
        updateProgress()
    })

    // Is fonts ready ?
    document.fonts.ready.then(() => {
        fontsLoaded = true
        updateProgress()
    })
})