const file = document.querySelector('#file');
const audio = document.querySelector('audio');
const butCon = document.querySelector('#but-con');
const playButton = document.querySelector('#play');
const total = document.querySelector('#total');
const time = document.querySelector('#time');
const inp = document.querySelector('#inp');
const playback = document.querySelector('#playback');
for (let i = 0.25; i <= 4; i += 0.25) {
    const option = document.createElement('option');
    option.innerHTML = String(i);
    option.value = String(i);
    playback.appendChild(option);
}
playback.value = '1';
playback.addEventListener('input', e => {
    audio.playbackRate = Number(playback.value);
});
let state = 1;
file.addEventListener('input', e => {
    audio.src = URL.createObjectURL(file.files[0]);
    state = 1;
    playButton.classList.add('pause');
});
playButton.addEventListener('click', e => {
    if (state === 1) {
        audio.play();
    }
    else {
        audio.pause();
    }
    playButton.classList.toggle('pause');
    state = state * (-1);
});
audio.addEventListener('canplaythrough', e => {
    total.innerHTML = String(audio.duration.toFixed(2));
    inp.max = String(audio.duration.toFixed(2));
    butCon.classList.remove('ready');
});
inp.addEventListener('input', e => {
    audio.currentTime = Number(inp.value);
});
audio.addEventListener('ended', e => {
    audio.currentTime = 0;
    audio.play();
});
const play = () => {
    time.innerHTML = String(audio.currentTime.toFixed(2));
    inp.value = String(audio.currentTime.toFixed(2));
    requestAnimationFrame(play);
};
play();
//# sourceMappingURL=index.js.map