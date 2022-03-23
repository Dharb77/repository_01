const inp = document.querySelector('#inp');
const but = document.querySelector('#but');
const con = document.querySelector('#con');
const makeEvent = (num, tag, fun) => {
    tag.addEventListener('click', fun);
    tag.removeEventListener('click', fun);
};
but.addEventListener('click', e => {
    if (inp.validity.valid) {
        const btn = document.createElement('button');
        makeEvent(Number(inp.value), btn, () => {
            alert(inp.value);
        });
        btn.innerHTML = '버튼';
        con.appendChild(btn);
    }
});
//# sourceMappingURL=index.js.map