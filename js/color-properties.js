import { hslToRgb, rgbToHsl, rgbToHex, hexToRgb } from './color-utilities.js';

export function randomColor() {
    // Generate random RGB color values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Generate a random saturation value for a given hex color
export const randomSaturation = (color) => {
    const { r, g, b } = hexToRgb(color);
    const { h, s, l } = rgbToHsl(r, g, b);
    const randomS = Math.random();

    const { r: newR, g: newG, b: newB } = hslToRgb(h, randomS, l);
    const newColor = rgbToHex(newR, newG, newB);

    return newColor;
};

// Generate a random hue value for a given hex color
export const randomHue = (color) => {
    const { r, g, b } = hexToRgb(color);
    const { h, s, l } = rgbToHsl(r, g, b);
    const randomH = Math.random();

    const { r: newR, g: newG, b: newB } = hslToRgb(randomH, s, l);
    const newColor = rgbToHex(newR, newG, newB);

    return newColor;
};

// Generate a random tint value for a given hex color
export const randomTint = (color) => {
    const { r, g, b } = hexToRgb(color);
    const { h, s, l } = rgbToHsl(r, g, b);

    const randomS = Math.random();
    const randomL = Math.random() * (1 - l) + l;

    const { r: newR, g: newG, b: newB } = hslToRgb(h, randomS, randomL);
    const newColor = rgbToHex(newR, newG, newB);

    return newColor;
};
