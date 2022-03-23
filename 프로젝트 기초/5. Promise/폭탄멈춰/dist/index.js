const inp = document.querySelector('#inp');
const con = document.querySelector('#con');
const time = document.querySelector('#time');
const bomb = document.querySelector('#bomb');
const button = document.querySelector('#stop');
const set = () => new Promise(res => {
    setTimeout(res, 10);
});
function addEvent(target, type) {
    return new Promise(res => {
        target.addEventListener(type, res, { once: true });
    });
}
(async () => {
    while (true) {
        break;
    }
})();
//# sourceMappingURL=index.js.map