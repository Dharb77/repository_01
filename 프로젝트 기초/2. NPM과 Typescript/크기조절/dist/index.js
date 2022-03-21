const menu = document.querySelector('#menu');
const div = document.querySelector('#box');
const mouse = document.querySelector('#menu > .mouse');
const wheel = document.querySelector('#menu > .wheel');
const keyArr = [0, 0, 0, 0, 0, 0];
const boxInfo = {
    width: 100, height: 100, speed: 60
};
const change = (str, num) => {
    if (str === 'mouse') {
        clicked(num);
    }
    else {
        if (str === 'ArrowLeft') {
            keyArr[0] = num;
        }
        if (str === 'ArrowRight') {
            keyArr[1] = num;
        }
        if (str === 'ArrowUp') {
            keyArr[2] = num;
        }
        if (str === 'ArrowDown') {
            keyArr[3] = num;
        }
        let keyMenu = document.querySelector(`#menu > .${str}`);
        if (num === 1) {
            keyMenu.style.display = 'flex';
        }
        else {
            keyMenu.style.display = 'none';
        }
    }
};
const clicked = (num) => {
    let arr = ['height', 'width'];
    keyArr[4 + num] = 1 - keyArr[4 + num];
    keyArr[5 - num] = 0;
    if (keyArr[4 + num] === 1) {
        mouse.innerHTML = `${arr[num]} <- ${arr[1 - num]}`;
        mouse.style.display = 'flex';
    }
    else {
        mouse.style.display = 'none';
    }
};
window.oncontextmenu = eventX;
window.onclick = eventX;
window.onkeyup = eventX;
window.onkeydown = eventX;
window.onwheel = eventX;
function eventX(e) {
    e.preventDefault();
    if (e.type === 'wheel') {
        if (e.deltaY > 0) {
            boxInfo.speed += 1;
        }
        else if (e.deltaY < 0) {
            if (boxInfo.speed > 0) {
                boxInfo.speed -= 1;
            }
        }
    }
    if (e.type === 'click') {
        change('mouse', 0);
    }
    if (e.type === 'contextmenu') {
        change('mouse', 1);
    }
    if (e.type === 'keydown') {
        change(e.key, 1);
    }
    if (e.type === 'keyup') {
        change(e.key, 0);
    }
}
function move() {
    if (boxInfo.width > 0) {
        boxInfo.width += (keyArr[1] - keyArr[0]) * boxInfo.speed / 60;
    }
    if (boxInfo.height > 0) {
        boxInfo.height += (keyArr[2] - keyArr[3]) * boxInfo.speed / 60;
    }
    if (keyArr[2] === 0 && keyArr[3] === 0) {
        if (keyArr[4] === 1) {
            if (boxInfo.height < boxInfo.width) {
                boxInfo.height += boxInfo.speed / 60;
            }
            else if (boxInfo.height > boxInfo.width) {
                boxInfo.height -= boxInfo.speed / 60;
            }
        }
    }
    if (keyArr[0] === 0 && keyArr[1] === 0) {
        if (keyArr[5] === 1) {
            if (boxInfo.width < boxInfo.height) {
                boxInfo.width += boxInfo.speed / 60;
            }
            else if (boxInfo.width > boxInfo.height) {
                boxInfo.width -= boxInfo.speed / 60;
            }
        }
    }
    wheel.innerHTML = `${boxInfo.speed}px/s`;
    div.style.width = `${boxInfo.width}px`;
    div.style.height = `${boxInfo.height}px`;
    requestAnimationFrame(move);
}
move();
//# sourceMappingURL=index.js.map