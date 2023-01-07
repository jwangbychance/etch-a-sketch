const container = document.querySelector('.container');
let size;
const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function initialise() {
    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.cssText = `width: ${960/(256)}px; height: ${960/(256)}px;`;
            container.appendChild(div);
        }
        const separator = document.createElement('div');
        separator.classList.add('separator');
        container.appendChild(separator);
    }
    hoverChange();
}

function hoverColourAdd() {
    if (size === undefined) {
        this.style.cssText = `width: ${960/(256)}px; height: ${960/(256)}px; background-color: pink;`;
    } else {
        this.style.cssText = `width: ${960/(size * size)}px; height: ${960/(size * size)}px; background-color: pink;`;
    }
}

function hoverColourRemove() {
    if (size === undefined) {
        this.style.cssText = `width: ${960/(256)}px; height: ${960/(256)}px; background-color: ;`;
    } else {
        this.style.cssText = `width: ${960/(size * size)}px; height: ${960/(size * size)}px; background-color: ;`;
    }
}

function hoverChange() {
    divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener(('mouseover'), hoverColourAdd);
        div.addEventListener(('mouseout'), hoverColourRemove);
    });
}

function buttonGrid() {
    for (let i = 0; i < parseInt(size); i++) {
        for (let i = 0; i < parseInt(size); i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('square');
            newDiv.style.cssText = `width: ${960/(size * size)}px; height: ${960/(size *size)}px;`;
            container.appendChild(newDiv);
        }
        const newSeparator = document.createElement('div');
        newSeparator.classList.add('separator');
        container.appendChild(newSeparator);
    }
    hoverChange();
}

function buttonPress() {
    size = prompt('Please enter number of squares per side <= 100', '');

    while (size > 100 || isNaN(parseInt(size))) {
        if (size === null) {
            size = 16;
            break;
        } else {
            return buttonPress();
        }
    }
    remove('.separator');
    remove('.square');
    buttonGrid();
}

const button = document.querySelector('.numberGrid');
button.addEventListener('click', buttonPress);

initialise();