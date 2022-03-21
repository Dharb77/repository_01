const cir = document.querySelector('#circle');
const body = document.querySelector('body');
const speed = 10;
const balls = [];
const first = [innerWidth / 2, innerHeight / 2];
const dest = [innerWidth / 2, innerHeight / 2];
const way = [0, 0, 0];
let frame = 0;
for (let i = 0; i < 30; i++) {
    balls.push([innerWidth / 2, innerHeight / 2]);
}
body.onclick = e => {
};
const main = () => {
    requestAnimationFrame(main);
};
main();
//# sourceMappingURL=index.js.map