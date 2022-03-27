const inp = document.querySelector('#inp');
const but = document.querySelector('#but');
const con = document.querySelector('#con');
const makeEvent = (num, tag, fun) => {
<<<<<<< HEAD
    if (num === 0) {
        tag.remove();
    }
    else {
        tag.addEventListener('click', () => {
            alert(num);
            makeEvent(num - 1, tag, fun);
        }, { once: true });
    }
=======
    tag.addEventListener('click', fun);
    tag.removeEventListener('click', fun);
>>>>>>> 131fb01032caa590f780355c7e13933f397b302a
};
but.addEventListener('click', e => {
    if (inp.validity.valid) {
        const btn = document.createElement('button');
<<<<<<< HEAD
        btn.innerHTML = 'button';
        makeEvent(Number(inp.value), btn, () => {
        });
=======
        makeEvent(Number(inp.value), btn, () => {
            alert(inp.value);
        });
        btn.innerHTML = '버튼';
>>>>>>> 131fb01032caa590f780355c7e13933f397b302a
        con.appendChild(btn);
    }
});
//# sourceMappingURL=index.js.map