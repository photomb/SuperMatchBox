// Randomize the value of buttons //
import { maxMatches, totalMatches } from './gameplay.js'

// Get random number //
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

// Get unique number per button //
function getUniqueRandomValue(uniqueValues, min, max) {
    let value = 0
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
    if (maxMatches <= 2) {
        window.alert('FATAL ERROR : maxMatches must be > 2 | CLOSE this tab/window and try again')
    }

    //Button 1 value
    let valueBtn1 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn1').value = valueBtn1
    document.getElementById('btn1').innerHTML = valueBtn1
    if (totalMatches <= 6) {
        document.getElementById('btn1').style.display = 'none'
    }

    //Button 2 value
    let valueBtn2 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn2').value = valueBtn2
    document.getElementById('btn2').innerHTML = valueBtn2
    if (totalMatches <= 3) {
        document.getElementById('btn2').style.display = 'none'
    }

    //Button 3 value
    let valueBtn3 = getUniqueRandomValue(uniqueValues, min, max)
    document.getElementById('btn3').value = valueBtn3
    document.getElementById('btn3').innerHTML = valueBtn3
    if (totalMatches <=3 && totalMatches > 1) {
        valueBtn3 = getRandomArbitrary(min, 2)
        document.getElementById('btn3').value = valueBtn3
        document.getElementById('btn3').innerHTML = valueBtn3
        console.log('new btn3 value : ' + valueBtn3)
    } else if (totalMatches == 1) {
        document.getElementById('btn3').value = 1
        document.getElementById('btn3').innerHTML = 1
    }
    console.log(" Button 1 : " + valueBtn1 + "\n", "Button 2 : " + valueBtn2 + "\n", "Button 3 : " + valueBtn3)
}

//Special "Joker" Button //
export function specialBtn() {
    const max = maxMatches
    const uniqueValues = []
    const valueBtn4 = getUniqueRandomValue(uniqueValues, 0, max)
    const audioSpecial = new Audio('./media/special.mp3')
    
    if (valueBtn4 == 0) {
        document.querySelectorAll('.special').forEach(button => { 
            button.disabled = false,
            button.style.opacity = 1,
            document.getElementById('btn4').innerHTML = '<img id="joker" src="./media/joker_pulse.gif" alt="joker_pulse">',
            audioSpecial.play()
            
            // gif effect //
            const gifEffect = document.createElement('img')
            gifEffect.src = './media/joker_eclat.gif'
            gifEffect.alt = 'joker_eclat'
            gifEffect.classList = 'pulse'

            const specialEffect = button.parentNode
            specialEffect.style.position = 'relative'
            specialEffect.appendChild(gifEffect)

            setTimeout(() => {
                gifEffect.remove()
            }, 20000) // remove after 2 seconds
        })
    } else {
        document.querySelectorAll('.special').forEach(button => { 
            button.disabled = true, button.style.opacity = 0.3
            document.getElementById('btn4').innerHTML ='<img id="joker" src="./img/joker.png" alt="joker">'
        })
    }
    
    //document.getElementById('btn4').value = valueBtn4

    console.log(" Special Button : " + valueBtn4)
}