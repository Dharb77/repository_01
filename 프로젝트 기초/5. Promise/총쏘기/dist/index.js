function addEvent(target, type) {
    return new Promise(res => {
        target.addEventListener(type, res, { once: true });
    });
}
function get4Place(_rot) {
    const rot = _rot % 360;
    if (rot === 0)
        return 0;
    else if (rot < 90)
        return 1;
    else if (rot === 90)
        return 2;
    else if (rot < 180)
        return 3;
    else if (rot === 180)
        return 4;
    else if (rot < 270)
        return 5;
    else if (rot === 270)
        return 6;
    else
        return 7;
}
const keyMap = new Map([
    ['ArrowUp', { down: 0, map: [-1, -1, 0, 1, 1, 1, 0, -1] }],
    ['ArrowDown', { down: 0, map: [1, 1, 0, -1, -1, -1, 0, 1] }],
    ['ArrowLeft', { down: 0, map: [0, 1, 1, 1, 0, -1, -1, -1] }],
    ['ArrowRight', { down: 0, map: [0, -1, -1, -1, 0, 1, 1, 1] }],
    ['Space', { down: 0 }]
]);
const barrel = document.querySelector('#barrel');
const container = document.querySelector('#container');
function main() {
    for (let bullet of Array.from(container.children)) {
    }
    if (keyMap.get('Space').down === 1) {
    }
    requestAnimationFrame(main);
}
main();
(async () => {
    while (true) {
        break;
    }
})();
//# sourceMappingURL=index.js.map