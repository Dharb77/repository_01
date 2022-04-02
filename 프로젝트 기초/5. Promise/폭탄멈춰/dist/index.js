const inp = document.querySelector('#inp');
const con = document.querySelector('#con');
const time = document.querySelector('#time');
const bomb = document.querySelector('#bomb');
const button = document.querySelector('#stop');
let sec = 0, milisec = 0;
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
        addEvent(inp, 'keydown')
            .then((v) => {
            if (v.key === 'Enter') {
                con.classList.remove('noshow');
                time.innerHTML = `${inp.value}:00`;
                addEvent(button, 'click')
                    .then(v => {
                    time.innerHTML = '폭탄 제거 완료!!';
                    button.classList.add('end');
                });
                while (true) {
                    if (milisec === 0) {
                        sec -= 1;
                        milisec = 99;
                    }
                    else {
                        milisec -= 1;
                    }
                    time.innerHTML = `${sec}:${milisec}`;
                    if (time.innerHTML === '00:00') {
                        time.innerHTML = '폭탄 제거 실패;;';
                        button.classList.add('end');
                        break;
                    }
                }
            }
        });
        break;
    }
})();
//# sourceMappingURL=index.js.map