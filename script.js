let dimension = 8;

const canvas = document.getElementById('canvas');

// generate column containers
for (let i = 0; i < dimension; i++) {
    const column = document.createElement('div');
    column.classList.add('column-container');
    canvas.appendChild(column);
}

// Irriterate pixels for every column
for (let i = 1; i <= dimension; i++) {
    let column = document.querySelector('.column-container:nth-of-type(' + i + ')');
    for (let j = 0; j < dimension; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        column.appendChild(pixel);
    }
}
