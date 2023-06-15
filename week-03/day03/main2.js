const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }

const changeColor = function () {
    let element = this
    this.style.backgroundColor = getRandomColor()
}




const addBoxes = function () {
    const container = document.getElementById("container")

    for(let i = 0; i<20; i++){
        let newBox = document.createElement("div")

        newBox.setAttribute("class", "box")
        newBox.style.backgroundColor = getRandomColor()
        newBox.onclick = changeColor
        container.appendChild(newBox)
    }
}
addBoxes()