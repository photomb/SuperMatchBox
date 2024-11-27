// Randomize the value of buttons //
import { maxMatches } from './gameplay.js'

let valueBtn1, valueBtn2, valueBtn3, valueBtn4

// Get random number //
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

// Get unique number per button //
function getUniqueRandomValue(uniqueValues, min, max) {
    let value;
    do {
        value = getRandomArbitrary(min, max)
    } while (uniqueValues.includes(value))
    uniqueValues.push(value)
    return value
}

//  Game Buttons Value //
export function randomizeBtns() {
    const min = 1
    const max = maxMatches
    const uniqueValues = []

    //Button 1 value
    valueBtn1 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn1').value = valueBtn1
    document.getElementById('btn1').innerHTML = valueBtn1

    //Button 2 value
    valueBtn2 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn2').value = valueBtn2
    document.getElementById('btn2').innerHTML = valueBtn2

    //Button 3 value
    valueBtn3 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn3').value = valueBtn3
    document.getElementById('btn3').innerHTML = valueBtn3
    
        console.log(" Button 1 : " + valueBtn1 + "\n", "Button 2 : " + valueBtn2 + "\n", "Button 3 : " + valueBtn3)
}

//Special "Joker" Button //

export function specialBtn() {
    const min = 1
    const max = maxMatches
    const uniqueValues = []

    valueBtn4 = getUniqueRandomValue(uniqueValues, 0, max)
    
    while (valueBtn4 == 0) {
        document.getElementById('btn4').style.opacity = 1
        break // Stop the loop if the value is 0 //
    }
    document.getElementById('btn4').value = valueBtn4
    document.getElementById('btn4').innerHTML ='<img id="joker" src="./img/joker.png" alt="joker">'

        console.log(" Special Button : " + valueBtn4)
}