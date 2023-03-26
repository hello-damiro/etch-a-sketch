import { createGrid } from './js/create-grid.js';
import { randomColor, randomSaturation, randomHue, randomTint } from './js/color-properties.js';

let dimension = document.getElementById('dimension-slider');
dimension.addEventListener('input', function () {
    controlChanges();
});

let color = document.getElementById('color-picker');
color.addEventListener('input', function () {
    controlChanges();
});

let colorType = document.getElementById('color-type');
colorType.addEventListener('change', function () {
    controlChanges();
});

function controlChanges() {
    createGrid(dimension.value);
    applyRandomColor(color.value, colorType.value);
}

controlChanges();
applyRandomColor(color.value, colorType.value);

function applyRandomColor(color, type) {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        if (type == 'hue') {
            pixel[i].style.backgroundColor = randomHue(color);
        } else if (type == 'saturation') {
            pixel[i].style.backgroundColor = randomSaturation(color);
        } else if (type == 'tint') {
            pixel[i].style.backgroundColor = randomTint(color);
        } else {
            pixel[i].style.backgroundColor = randomColor(color);
        }
    }
}
