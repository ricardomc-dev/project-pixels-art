
function setColorPalettes() {
    const boxPalettes = document.querySelectorAll('.color');
    const colorArray = ['black', 'red', 'blue', 'green']
    for (let index =1; index < boxPalettes.length; index += 1) {
        boxPalettes[index].style.backgroundColor = colorArray[index];
    }
    boxPalettes[0].style.backgroundColor = 'black';
}
setColorPalettes();

let blackPixel = document.querySelector('.color');
blackPixel.classList.add('selected')

function changeClassSelected(event) {
    let getSelected = document.querySelector('.selected');
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

function createPixel(number) {
    let baseSquare = number;
    let board = document.querySelector('#pixel-board');
    for (let index = 1; index <= baseSquare; index += 1){
        const lines = document.createElement('div');
        lines.classList.add('line');
        board.appendChild(lines)
        for (let index = 1; index <= baseSquare; index +=1) {
            const box = document.createElement('div');
            box.classList.add('pixel')
            lines.appendChild(box)
        }
    }
}
createPixel(5)

function changePixelColor() {
    let pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', function(event){
            let colorSelected = document.querySelector('.selected');
            let color = colorSelected.style.backgroundColor;
            console.log(color)
            event.target.style.backgroundColor = color;
        })
    }
}
changePixelColor();

function clearBoard(){
    let button = document.createElement('button');
    button.id = 'clear-board';
    button.innerHTML = 'Limpar'
    let getMain = document.getElementsByTagName('main')[0];
    let getBoard = document.querySelector('#pixel-board')
    getMain.insertBefore(button, getBoard);
    let pixel = document.querySelectorAll('.pixel');
    button.addEventListener('click', function(){
        for (let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white'
        }
    })
}
clearBoard()

function createSizeButton(){
    let getColorPalette = document.querySelector('#color-palette'); 
    let sizeLabel = document.createElement('label');
    sizeLabel.innerText = 'Inserir um número de 5 a 50';
    let sizeInput = document.createElement('input');
    let n = sizeInput.value;
    sizeInput.id = 'board-size';
    sizeInput.size = '23';
    let sizeButton = document.createElement('button');
    sizeButton.id = 'generate-board';
    sizeButton.innerHTML = 'VQV';
    getColorPalette.appendChild(sizeLabel);
    getColorPalette.appendChild(sizeInput);
    getColorPalette.appendChild(sizeButton);
    createPixel(n);

}
createSizeButton();