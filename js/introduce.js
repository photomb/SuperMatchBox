//import { creditsPop } from "./credits.js";
import { wiiSports, fadeVolume } from "./fadevolume.js";

function letStart() {
    const start = document.getElementById('start');
    const mouseStart = new Audio ('./media/mouse-start.mp3')
    start.addEventListener('click', () => {
        mouseStart.play()
        mouseStart.onended = () => {
            location.replace('./gameoptions.html')
        }
        fadeVolume(wiiSports)
    })
}

letStart()
//creditsPop()