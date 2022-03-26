const inp = document.querySelector('#inp');
const but = document.querySelector('#but');
const con = document.querySelector('#con');
const makeEvent = (num, tag, fun) => {
    if (num === 0) {
        tag.remove();
    }
    else {
        tag.addEventListener('click', () => {
            alert(num);
            makeEvent(num - 1, tag, fun);
        }, { once: true });
    }
};
but.addEventListener('click', e => {
    if (inp.validity.valid) {
        const btn = document.createElement('button');
        btn.innerHTML = 'button';
        makeEvent(Number(inp.value), btn, () => {
        });
        con.appendChild(btn);
    }
});
//# sourceMappingURL=index.js.map