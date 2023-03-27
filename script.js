import { createGrid } from './js/create-grid.js';
import { randomColor, randomSaturation, randomHue, randomTint } from './js/color-properties.js';

let dimension = document.getElementById('dimension-slider');
dimension.addEventListener('input', function () {
    controlChanges();
});

let selectedColor = document.getElementById('color-picker');
selectedColor.addEventListener('input', function () {
    draw(selectedColor.value, colorType.value);
});

let colorType = document.getElementById('color-type');
colorType.addEventListener('change', function () {
    draw(selectedColor.value, colorType.value);
});

function controlChanges() {
    createGrid(dimension.value);
    draw(selectedColor.value, colorType.value);
}

function draw(color, type) {
    const pixels = document.querySelectorAll('.pixel');
    let isDragging = false;

    function selectedColorType(color, type) {
        if (type == 'hue') {
            return randomHue(color);
        } else if (type == 'saturation') {
            return randomSaturation(color);
        } else if (type == 'tint') {
            return randomTint(color);
        } else if (type == 'random') {
            return randomColor(color);
        } else {
            return color;
        }
    }

    pixels.forEach((pixel) => {
        pixel.addEventListener('mousedown', () => {
            isDragging = true;
            pixel.style.backgroundColor = selectedColorType(color, type);
        });

        pixel.addEventListener('mouseover', () => {
            if (isDragging) {
                pixel.style.backgroundColor = selectedColorType(color, type);
            }
        });

        pixel.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });
}

// INITIALIZE
controlChanges();
