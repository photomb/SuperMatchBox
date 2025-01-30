export const startMusic = document.getElementById('intro-audio')
export const wiiMusic = document.getElementById('wiiMusic')
export const miiMusic = document.getElementById('miiMusic')

export function fadeVolume(music) {
    let fadeInterval = setInterval(() => {
        if (music.volume >= 0.5) {
            music.volume = Math.min(music.volume - 0.75, 1) //fade the music away
        } else {
            clearInterval(fadeInterval) //Stop when volume = 0
        }
    }, 100); //All 100ms, volume fade away
}