const troll = document.querySelector('#troll');
const input = document.querySelector('input');
class X {
    span = document.createElement('span');
    par;
    color;
    speed;
    ori;
    width;
    height;
    way = 0;
    arr = [
        ['width', 'left', 'right', '0deg'],
        ['height', 'top', 'bottom', '90deg'],
        ['width', 'right', 'left', '180deg'],
        ['height', 'bottom', 'top', '-90deg']
    ];
    constructor(par) {
    }
    next() {
    }
    apply() {
    }
}
const x = new X({
    color: 'red',
    el: troll,
    speed: 15,
    width: 10
});
const main = () => {
    x.next();
    requestAnimationFrame(main);
};
main();
//# sourceMappingURL=index.js.map