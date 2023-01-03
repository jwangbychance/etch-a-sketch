const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

function hoverColourAdd() {
    this.style.cssText = 'background-color: pink;';
}

function hoverColourRemove() {
    this.style.cssText = 'background-color: ;';
}

divs = document.querySelectorAll('.square');
divs.forEach((div) => {
    div.addEventListener(('mouseover'), hoverColourAdd);
    div.addEventListener(('mouseout'), hoverColourRemove);
});