import { createGrid } from './js/create-grid.js';
import { randomColor, randomSaturation, randomHue, randomTint } from './js/color-properties.js';

let dimension = 32;
createGrid(dimension);

function applyRandomColor() {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = randomTint('#7175f5');
    }
}

applyRandomColor();
