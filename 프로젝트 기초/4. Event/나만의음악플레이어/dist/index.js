class MusicPlayer {
    arr = [];
    list;
    range;
    time;
    thum;
    button;
    audio = document.createElement('audio');
    cur;
    constructor({ list, range, time, button }) {
        const audio = this.audio;
        audio.addEventListener('canplaythrough', e => {
        });
        audio.addEventListener('ended', e => {
        });
        button.addEventListener('click', e => {
            const arr = {};
            const file = document.createElement('input');
            file.type = 'file';
            file.multiple = true;
            file.addEventListener('input', e => {
            }, { once: true });
            file.click();
        });
        list.addEventListener('click', e => {
        });
        range.addEventListener('input', e => {
        });
        const play = () => {
            requestAnimationFrame(play);
        };
        play();
    }
    push(obj) {
        const index = String(this.list.children.length);
        const id = String(Math.random());
        const newObj = {
            id,
            index,
            name: obj.name,
            blob: '',
            thum: '',
        };
    }
    select(tar) {
    }
    get(id) {
    }
    setThum(name, thum) {
    }
}
const musics = new MusicPlayer({
    list: document.querySelector('#list'),
    range: document.querySelector('#range'),
    time: document.querySelector('#time'),
    button: document.querySelector('#file'),
    thum: document.querySelector('#thum')
});
//# sourceMappingURL=index.js.map