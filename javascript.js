const container = document.querySelector('.container');
let size = 16;
let count = 1;
const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

function initialise() {
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.cssText = `width: ${580 / size}px; height: ${580 / size}px;`;
            container.appendChild(div);
        }
        const separator = document.createElement('div');
        separator.classList.add('separator');
        container.appendChild(separator);
    }
    hoverChange();
}

function rainbowRGB() {
    return Math.floor(Math.random() * 255);
}

function hoverColourAdd(e) {
    if (count === 10 && e.buttons === 1) {
        this.style.cssText = `width: ${580 / size}px; height: ${580 / size}px; background-color: black;`;
        count = 1;
    } else if (e.buttons === 1) {
        this.style.cssText = `width: ${580 / size}px; height: ${580 / size}px; background-color: rgb(${rainbowRGB()}, ${rainbowRGB()}, ${rainbowRGB()});`;
        count++;
    }
}

function hoverColourRemove() {
    this.style.cssText = `width: ${580 / size}px; height: ${580 / size}px; background-color: ;`;
}

function hoverChange() {
    divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener('mousemove', hoverColourAdd, {once: true});
    });
}

function buttonGrid() {
    for (let i = 0; i < parseInt(size); i++) {
        for (let i = 0; i < parseInt(size); i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('square');
            newDiv.style.cssText = `width: ${580 /  size}px; height: ${580 / size}px;`;
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
            count = 1;
            break;
        } else {
            return buttonPress();
        }
    }
    count = 1;
    remove('.separator');
    remove('.square');
    buttonGrid();
}

const button = document.querySelector('.numberGrid');
button.addEventListener('click', buttonPress);

initialise();