// html elements
const gameDisplay = document.querySelector(".game-grid")
const rgbBtn = document.getElementById("#rgb-radio")
const monochromeBtn = document.getElementById("#Monochrome-radio")
const resetBtn = document.querySelector("reset")

//create function for grid input
function getGridSize () {
    let gridSize = prompt("Enter a number 1-100")
}
//rgb function
function useRGB () {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}
//monochrome function

//reset function

