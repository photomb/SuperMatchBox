export const wiiMusic = document.getElementById('wiiMusic')
export const miiMusic = document.getElementById('miiMusic')
export const wiiSports = document.getElementById('wiiSports')

export function fadeVolume(music) {
    let fadeInterval = setInterval(() => {
        if (music.volume > 0.05) {
            music.volume = Math.max(music.volume - 0.05, 0) //fade the music away
        } else {
            clearInterval(fadeInterval)
            music.volume = 0
            music.pause()
        }
    }, 100); //All 100ms, volume fade away
}