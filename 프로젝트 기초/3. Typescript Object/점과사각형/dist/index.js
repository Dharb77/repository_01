const container = document.querySelector('#container');
class Point {
    x;
    y;
    div = document.createElement('div');
    rects = new Set();
    constructor(x, y) {
    }
    add(r) {
    }
    remove(r) {
    }
}
class Rect {
    x;
    y;
    w;
    h;
    points = [null, null];
    div = document.createElement('div');
    constructor(p1, p2) {
    }
    remove() {
    }
}
class Manager {
    points = new Map();
    rects = new Map();
    par;
    selected = null;
    constructor(par) {
        this.par = par;
    }
    addPoint(p) {
    }
    addRect(r) {
    }
    removePoint(div) {
    }
    removeRect(div) {
    }
    select(div) {
    }
}
const PM = new Manager(container);
container.onclick = e => {
    e.preventDefault();
    const tar = e.target;
    if (tar === container) {
        const point = new Point(e.clientX, e.clientY);
        PM.addPoint(point);
    }
    else if (tar.classList.contains('dot')) {
        PM.select(tar);
    }
};
container.oncontextmenu = e => {
    e.preventDefault();
    const tar = e.target;
    if (tar.classList.contains('dot')) {
        PM.removePoint(tar);
    }
    else if (tar.classList.contains('rect')) {
        PM.removeRect(tar);
    }
};
//# sourceMappingURL=index.js.map