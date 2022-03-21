// https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio

/*
    쓰인 audio 메소드
        play
        pause

    쓰인 audio 속성
        paused
        duration
        currentTime
        playbackRate
    쓰인 이벤트
        canplaythrough
        ended
*/

const file = document.querySelector<HTMLInputElement>('#file');
const audio = document.querySelector<HTMLAudioElement>('audio');
const butCon = document.querySelector<HTMLButtonElement>('#but-con');
const playButton = document.querySelector<HTMLButtonElement>('#play');
const total = document.querySelector<HTMLSpanElement>('#total');
const time = document.querySelector<HTMLSpanElement>('#time');
const inp = document.querySelector<HTMLInputElement>('#inp');
const playback = document.querySelector<HTMLSelectElement>('#playback')

for(let i = 0.25; i <= 4; i += 0.25){
    const option = document.createElement('option');
    option.innerHTML = String(i);
    option.value = String(i);
    playback.appendChild(option);
}

playback.value = '1';

playback.addEventListener('input', e => {
    // 오디오 속도 바꾸기
    audio.playbackRate = Number(playback.value);
});

let state = 1;

file.addEventListener('input', e => {
    // 그전 오디오 지우고, 다시 오디오 등록
    // 오디오만 등록
    audio.src = URL.createObjectURL(file.files[0]);
    state = 1;
    playButton.classList.add('pause');
});

playButton.addEventListener('click', e => {
    // 일시정지인 상태면 재생
    // 재생상태면 일시 정지
    if(state === 1){
        audio.play();
    }else{
        audio.pause();
    }
    playButton.classList.toggle('pause');
    state = state * (-1);
});

audio.addEventListener('canplaythrough', e => {
    // 오디오 재생 준비 하기
    // butCon ready 클래스 없애기
    total.innerHTML = String(audio.duration.toFixed(2));
    inp.max = String(audio.duration.toFixed(2));
    butCon.classList.remove('ready');
});

inp.addEventListener('input', e => {
    // audio 시간 바꾸기
    audio.currentTime = Number(inp.value);
});

audio.addEventListener('ended', e => {
    // 끝나면 다시 재생
    audio.currentTime = 0;
    audio.play();
});


const play = () => {
    // 실시간 시간 기록
    // time과 inp에 기록
    time.innerHTML = String(audio.currentTime.toFixed(2));
    inp.value = String(audio.currentTime.toFixed(2));

    requestAnimationFrame(play);
};

play();