// ProgressBar //
let maxBar = 200
let currentBar = 0
let progressBar
let intervalID

function updateProgressBar() {
    progressBar = getElementById('progressBar')
    progressBar.value = currentBar
    progressBar.max = maxBar
}

function displayBar() {
    currentBar++
    progressBar = currentBar
    if (currentBar > maxBar) {
        clearInterval( intervalID )
    }
    progressBar.valueOf = currentBar
}

intervalID = setInterval( displayBar(), 100)