const makeFire = (x, y) => {
};
const fires = new Set([makeFire(innerWidth / 2, innerHeight / 2)]);
const arr = [
    [2, 'yellow'],
    [10, 'orange'],
    [20, 'orangered'],
];
document.body.onclick = e => {
    fires.add(makeFire(e.clientX, e.clientY));
};
const main = () => {
    for (let fire of Array.from(fires)) {
    }
    requestAnimationFrame(main);
};
main();
//# sourceMappingURL=index.js.map