document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");
    const audio = document.getElementById("intro-audio");
    const preloader = document.getElementById("preloader");
    const progressFill = document.querySelector(".progress-fill");
    const loadingText = document.getElementById("loading-text");

    let videoLoaded = false;
    let audioLoaded = false;
    let fontsLoaded = false;

    // Vérifie si la vidéo est prête
    video.addEventListener("progress", () => {
        if (video.readyState >= 25) {
            videoLoaded = true;
            updateProgress();
        }
    });

    video.addEventListener("canplaythrough", () => {
        videoLoaded = true;
        updateProgress();
    });

    // Vérifie si l'audio est prête
    audio.addEventListener("progress", () => {
        if (audio.readyState >= 25) {
            audioLoaded = true;
            updateProgress();
        }
    });

    audio.addEventListener("canplaythrough", () => {
        audioLoaded = true;
        updateProgress();
    });

    // Vérifie si les polices sont chargées
    document.fonts.ready.then(() => {
        fontsLoaded = true;
        updateProgress();
    });

    function updateProgress() {
        let progress = 0;
        
        if (videoLoaded) progress += 50;
        if (audioLoaded) progress += 30;
        if (fontsLoaded) progress += 20;

        progressFill.style.width = `${progress}%`;
        loadingText.textContent = `${progress}%`;

        if (progress === 100) {
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => preloader.style.display = "none", 500);
            }, 500);
        }
    }
});