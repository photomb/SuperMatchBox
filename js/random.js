//Randomize the value of buttons
import { maxMatches } from './gameplay.js'
import { gameButtons } from './start.js'

export let valueBtn1
export let valueBtn2
export let valueBtn3

export function randomizeBtn1() {
    valueBtn1 = Math.floor(Math.random() * maxMatches) + 1
    document.getElementById('btn1').value = valueBtn1
    document.getElementById('btn1').innerHTML = valueBtn1
    console.log(gameButtons)
}

export function randomizeBtn2() {
    valueBtn2 = Math.floor(Math.random() * maxMatches) + 1
    document.getElementById('btn2').value = valueBtn2
    document.getElementById('btn2').innerHTML = valueBtn2
    console.log(gameButtons)
}

export function randomizeBtn3() {
    valueBtn3 = Math.floor(Math.random() * maxMatches) + 1
    document.getElementById('btn3').value = valueBtn3
    document.getElementById('btn3').innerHTML = valueBtn3
    console.log(gameButtons)
}