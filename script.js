const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const speedSelectionInput = document.getElementById('speedSelectionBPM')
const speedDisplay = document.getElementById('speedDisplay')
const metronomeBox = document.getElementById('metronomeBox')

let audioValue = 1
let audioToPlay = new Audio(`SOUNDFILE/1.wav`)

function beginMetronome() {
    stopButton.disabled = false
    startButton.disabled = true
    let msValue = parseInt(speedSelectionInput.value)
    let bPMCalculation = Math.floor(60000 / msValue)
    let intervalID = setInterval(function() {
        metronomeBox.style.backgroundColor = 'LightBlue'
        audioToPlay.play()
        setTimeout(function() {
        metronomeBox.style.backgroundColor = 'White'
        }, bPMCalculation / 10)
     }, bPMCalculation)
     stopButton.addEventListener('click', function() {
        stopButton.disabled = true
        startButton.disabled = false
        clearInterval(intervalID)
    })
}

startButton.addEventListener('click', beginMetronome)

speedSelectionInput.addEventListener('input', function() {
    speedDisplay.innerHTML = speedSelectionInput.value
})
