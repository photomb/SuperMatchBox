import { creditsPop } from "./credits.js";

function letStart() {
    const start = document.getElementById('start');
    const mouseStart = new Audio ('./media/mouse-start.mp3')
    start.addEventListener('click', () => {
        mouseStart.play()
        mouseStart.onended = () => {
        location.replace('./gameoptions.html')
        }
        
    });
}

letStart()
creditsPop()