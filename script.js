const pixelBoard = '#pixel-board';
let n = 5;
function setColorPalettes() {
  const boxPalettes = document.querySelectorAll('.color');
  const colorArray = ['black', '#F01E59', '#181695', '#20951A'];
  for (let index = 1; index < boxPalettes.length; index += 1) {
    boxPalettes[index].style.backgroundColor = colorArray[index];
  }
  boxPalettes[0].style.backgroundColor = 'black';
}
setColorPalettes();

const blackPixel = document.querySelector('.color');
blackPixel.classList.add('selected');

function changeClassSelected(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function setClassPalettes() {
  const palettesBox = document.querySelectorAll('.color');
  for (let index = 0; index < palettesBox.length; index += 1) {
    palettesBox[index].addEventListener('click', changeClassSelected);
  }
}
setClassPalettes();

function createPixel() {
  const baseSquare = n;
  const board = document.querySelector(pixelBoard);
  for (let index = 1; index <= baseSquare; index += 1) {
    const lines = document.createElement('div');
    lines.classList.add('line');
    board.appendChild(lines);
    for (let i = 1; i <= baseSquare; i += 1) {
      const box = document.createElement('div');
      box.classList.add('pixel');
      lines.appendChild(box);
    }
  }
}
createPixel();

function changeBackgroundColor(event) {
  const colorSelected = document.querySelector('.selected');
  const color = colorSelected.style.backgroundColor;
  const element = event.target;
  console.log(color);
  element.style.backgroundColor = color;
}
function changePixelColor() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', changeBackgroundColor);
  }
}
changePixelColor();
function clearPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
function clearBoard() {
  const buttonSection = document.createElement('section');
  buttonSection.id = 'button-section';
  const getMain = document.getElementsByTagName('main')[0];
  const getBoard = document.querySelector(pixelBoard);
  getMain.insertBefore(buttonSection, getBoard);
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerHTML = 'Limpar';
  buttonSection.appendChild(button);
  button.addEventListener('click', clearPixel);
}
clearBoard();

function createSizeButton() {
  const getMain = document.getElementsByTagName('main')[0];
  const getBoard = document.querySelector(pixelBoard);
  const sizeSection = document.createElement('section');
  sizeSection.id = 'size-section';
  getMain.insertBefore(sizeSection, getBoard);
  const sizeInput = document.createElement('input');
  n = sizeInput.value;
  sizeInput.id = 'board-size';
  sizeInput.min = 5;
  sizeInput.max = 50;
  sizeInput.type = 'number';
  const sizeButton = document.createElement('button');
  sizeButton.id = 'generate-board';
  sizeButton.innerHTML = 'VQV';
  sizeSection.appendChild(sizeInput);
  sizeSection.appendChild(sizeButton);
  sizeButton.addEventListener('click', createPixel);
}
createSizeButton();
