// console.log(document)
document.getElementById("playing-field").style.backgroundColor = "blue"
const down = document.getElementById("down")


const playingField = document.getElementById("playing-field")

fieldX = playingField.clientWidth;
fieldY = playingField.clientHeight;


document.getElementById("ball").style.backgroundColor = "yellow"

let idCounter = 0

const ball = document.getElementById("ball")
ballX = ball.clientWidth;
ballY = ball.clientHeight;

STEP = 50

const moveBall = function() {

}

const moveRight = function(){

    let currentX = parseInt(ball.style.left) || 0
    currentX += STEP
    if (currentX + ballX> fieldX) {
        currentX = fieldX - ballX
    }

    ball.style.left = currentX+"px"
}

const moveLeft = function(){
    let currentX = parseInt(ball.style.left) || 0
    currentX -= STEP
    if (currentX < 0) {
        currentX = 0
    }
    ball.style.left = currentX+"px"
}
const moveDown = function(){
    let currentY = parseInt(ball.style.top) || 0
    currentY += STEP
    ball.style.top = currentY+"px"
    if (currentY + ballY> fieldY) {
        currentY = fieldY - ballY
    }
    ball.style.top = currentY+"px"
}
const moveUp = function(){
    let currentY = parseInt(ball.style.top) || 0
    currentY -= STEP
    if (currentY < 0) {
        currentY = 0
    }
    ball.style.top = currentY+"px"
}





const makeH1 = function(){
    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)
    header.setAttribute("class", "my-header")
}

const makeH2 = function(){
    const subHeader = document.createElement("h2")
    subHeader.innerHTML = "Game by GvrSrg"
    document.body.appendChild(subHeader)
    subHeader.setAttribute("class", "my-subheader")
}

const clickColor = function(){
    box.style.backgroundColor = "#8e44ad"
}

const addItem = function(){
    const list = document.getElementById("list")
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}

const box = document.getElementById("box")
const box2 = document.getElementById("box2")
const clicked = function () {
    box.innerHTML = "clicked"
}

box.onclick = clicked

box.onmouseenter = function(){
    box.style.backgroundColor = "#ff0000"
}
box.onmouseleave = function(){
    box.style.backgroundColor = "#00ff00"
}

const newBox = document.createElement("div") // dynamically creating an element

newBox.setAttribute("class", "box")
newBox.onclick = function(){       // adding an event to the new element
    newBox.innerHTML = "I'm alive!"
}

box2.appendChild(newBox) // now the box will be on the page, and will react to a click! 