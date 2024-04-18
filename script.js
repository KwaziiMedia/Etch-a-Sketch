//variables
const grid = document.querySelector(".grid")
const resetBtn = document.querySelector(".reset")
const gridSizeBtn = document.querySelector('.grid-size')
const size = 800;
//initalizeGrid
function initalizeGrid(userSize){
    for(let i = 0; i < userSize * userSize; i++){
        let cell = document.createElement("div")
        cell.classList.add("square")
        cell.style.width = (700 / userSize - 2 + "px")
        cell.style.height = (650 / userSize - 2 + "px")
        cell.style.border = "1px solid black"
        grid.appendChild(cell)
            cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = drawColors()
            })
    }
}
initalizeGrid(16)
//rgbColor
function drawColors() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let RGB = `rgb(${r},${g},${b})`
    return RGB
}

//create Grid function
gridSizeBtn.addEventListener("click", function() {
    let userSize = parseInt(prompt("Enter a number 1-100"))
    if(userSize <= 100){
        grid.innerHTML = ""
        initalizeGrid(userSize)
    } else {
        alert("Enter a number 1-100")
    }
})
//reset function
resetBtn.addEventListener("click", function(){
    grid.innerHTML = ""
    initalizeGrid(16)
})
