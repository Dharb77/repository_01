const menu = document.querySelector('#menu');
const div = document.querySelector('#box');
const mouse = document.querySelector('#menu > .mouse');
const wheel = document.querySelector('#menu > .wheel');
const keyArr = [0, 0, 0, 0, 0, 0];
const boxInfo = {
    width: 100, height: 100, speed: 60
};
const change = (str, num) => {
};
window.oncontextmenu = eventX;
window.onclick = eventX;
window.onkeyup = eventX;
window.onkeydown = eventX;
window.onwheel = eventX;
function eventX(e) {
    e.preventDefault();
}
function move() {
    requestAnimationFrame(move);
}
move();
//# sourceMappingURL=index.js.map