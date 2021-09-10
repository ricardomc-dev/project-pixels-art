/*
let getMain = document.getElementsByTagName('main')[0];
let board = document.createElement('div');
board.id = 'pixel-board';
getMain.appendChild(board);
*/
/*
function createLines() {
    let numberOfLines = 5;
    let boxLines = document.createElement('div');
    let pixelBoard = document.querySelector('#pixel-board')
    for (let index = 1; index <= numberOfLines; index += 1){
        pixelBoard.appendChild(boxLines); 
    }
}
createLines();
*/
/*
function createBox(){
    let box = document.createElement('div');
    box.classList.add('pixel');
    return box;
}
let baseSquare = 5;
*/
/*
function createColumn() {
    let numberOfColumn = 5;
    let box = document.createElement('div');
    let getLines = document.querySelectorAll('.line');
    console.log(getLines)
    for (let index = 0; index < getLines.length; index += 1) {
        getLines[index].appendChild(box)
    }
}
createColumn()
*/

window.onload = function() {
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
}