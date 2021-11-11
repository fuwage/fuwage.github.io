"use strict";

console.log('test');

const baseImage = [
    '1.png', '2.png', '3.png', '4.png'
];

const onakaImage = [
    '1.png', '2.png', '3.png', '4.png'
];

let baseChoice = '1.png';
const baseDiv = document.getElementById('base');
for (const imgName of baseImage) {
    const img = document.createElement('img');
    img.src = 'image/' + imgName;
    img.size = '50';
    baseDiv.appendChild(img);
    img.addEventListener('click', () => {
        baseChoice = imgName;
    });
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log(baseChoice);
});

