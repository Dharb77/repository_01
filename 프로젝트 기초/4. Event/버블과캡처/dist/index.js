const root = document.querySelector('#con > .node');
let left = 50;
let count = 0;
let i = 0;
const isLeaf = (e) => {
    let cur = e.currentTarget;
    let tar = e.target;
};
const fun = (e) => {
    let cur = e.currentTarget;
    let tar = e.target;
    cur.dataset.num = `${Number(cur.dataset.num) + 1}`;
    cur.classList.add('sel');
    setTimeout(() => {
        cur.classList.remove('sel');
    }, 0);
};
while (true) {
    let find = Array.from(document.querySelectorAll('#con' + '> .node'.repeat(i + 1)));
    if (find.length === 0) {
        count = i;
        break;
    }
    else {
        for (let n = 0; n < find.length; n++) {
            find[n].style.left = `${left * (1 + -2 * (n % 2))}vw`;
            find[n].dataset.num = '0';
        }
        left = left / 2;
        i++;
    }
    let nodes = document.querySelectorAll('.node');
    nodes.forEach((v, i) => {
        v.addEventListener('click', fun);
    });
}
root.style.setProperty('--top', `calc((100vh - 50px) / ${count - 1})`);
//# sourceMappingURL=index.js.map