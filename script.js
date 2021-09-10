let baseSquare = 5;
let lines = document.querySelectorAll(".line");
  
function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
}
  
function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= baseSquare; lineColumn += 1) {
        let box = createBox("pixel");
        divLine.appendChild(box);
    }
}
    
function fillSquare(lines) {
    for(let index = 0; index < lines.length; index += 1) {
        fillLine(lines[index]);
    }
}
fillSquare(lines);

window.onload = function() {
    let blackBox = document.querySelector('.color');
    blackBox.classList.add('selected')
}
const blackBox = document.querySelectorAll('.color')[0];
const redBox = document.querySelectorAll('.color')[1];
const blueBox = document.querySelectorAll('.color')[2];
const greenBox = document.querySelectorAll('.color')[3];

function changeClassSelected(event) {
    let getSelected = document.querySelector('.selected');
    getSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

blackBox.addEventListener('click', changeClassSelected);
redBox.addEventListener('click', changeClassSelected);
blueBox.addEventListener('click', changeClassSelected);
greenBox.addEventListener('click', changeClassSelected);
