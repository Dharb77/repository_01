"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addEvent(target, type) {
    return new Promise(res => {
        target.addEventListener(type, res, { once: true });
    });
}
class Change {
    max;
    frame = 0;
    p1;
    p2;
    x1;
    y1;
    x2;
    y2;
    constructor(p1, p2, frame) {
        this.p1 = p1;
        this.p2 = p2;
        this.x1 = (Number(this.p2.dataset.x) - Number(this.p1.dataset.x)) * SIZE;
        this.y1 = (Number(this.p2.dataset.y) - Number(this.p1.dataset.y)) * SIZE;
        this.x2 = -this.x1;
        this.y2 = -this.y1;
        this.max = frame;
    }
    next() {
        return false;
    }
}
const puzzleContainer = document.querySelector('#puzzle-container');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const way = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
];
let shuffle = addEvent(button, 'click');
let puzzleClick = addEvent(puzzleContainer, 'click');
const LEN = 4;
const SIZE = 600 / LEN;
const SHUFFLE_SPEED = 3;
const SPEED = 10;
let change = null;
for (let i = 0; i < LEN * LEN; i++) {
    const puzzle = document.createElement('div');
    puzzle.classList.add('puzzle');
    puzzle.dataset.x = String(i % LEN);
    puzzle.dataset.y = String(Math.floor(i / LEN));
    puzzle.dataset.xi = String(i % LEN);
    puzzle.dataset.yi = String(Math.floor(i / LEN));
    puzzle.style.width = `calc(100% / ${LEN})`;
    puzzle.style.height = `calc(100% / ${LEN})`;
    puzzle.style.backgroundSize = `calc(100% * ${LEN}) calc(100% * ${LEN})`;
    changePos(puzzle);
    puzzleContainer.appendChild(puzzle);
}
function changePos(puzzle) {
}
function getEmpty() {
    return document.querySelector('.none');
}
function isClear() {
    return false;
}
function main() {
    if (button.classList.contains('shuffle')) {
    }
    else if (change) {
    }
    requestAnimationFrame(main);
}
main();
while (true) {
    break;
}
//# sourceMappingURL=index.js.map