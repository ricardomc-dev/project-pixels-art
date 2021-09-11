window.onload = function() {
    let blackPixel = document.querySelector('.color');
    blackPixel.classList.add('selected')

    let baseSquare = 5;
    let board = document.querySelector('#pixel-board');
    function createPixel() {
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
    createPixel()
    
    function setColorPalettes() {
        const boxPalettes = document.querySelectorAll('.color');
        const colorArray = ['black', 'red', 'blue', 'green']
        for (let index =1; index < boxPalettes.length; index += 1) {
            boxPalettes[index].style.backgroundColor = colorArray[index];
        }
        boxPalettes[0].style.backgroundColor = 'black';
    }
    setColorPalettes();
    
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
}




