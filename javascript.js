const container = document.querySelector('.container');
let size;
const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function initialise() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    hoverChange();
}

function hoverColourAdd() {
    this.style.cssText = 'background-color: pink;';
}

function hoverColourRemove() {
    this.style.cssText = 'background-color: ;';
}

function hoverChange() {
    divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener(('mouseover'), hoverColourAdd);
        div.addEventListener(('mouseout'), hoverColourRemove);
    });
}

function buttonGrid() {
    for (let i = 0; i < parseInt(size * size) + 1; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        container.appendChild(newDiv);
    }
    hoverChange();
}

function buttonPress() {
    size = prompt('Please enter number of squares per side <= 100', '');

    while (size > 100 || isNaN(parseInt(size))) {
        if (size === null) {
            break;
        } else {
            size = prompt('Enter appropriate number <= 100', '');
        }
    }
    remove('.square');
    buttonGrid();
}

const button = document.querySelector('.numberGrid');
button.addEventListener('click', buttonPress);

initialise();