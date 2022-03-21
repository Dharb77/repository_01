/*
    변수 설명 : cir : 움직이는 원, body : 바디태그, speed : 속도
    balls : 그림자들의 위치
    first : 처음 위치
    dest : 나중 위치
    way : x방향, y방향, frame수
    frame : 현재 frame (way[2]보다 항상 작거나 같음)
*/

const cir = document.querySelector<HTMLDivElement>('#circle');
const body = document.querySelector<HTMLBodyElement>('body');
const speed = 10;

const balls:[number, number][] = [];

const first:[number, number] = [innerWidth / 2, innerHeight / 2];

const dest:[number, number] = [innerWidth / 2, innerHeight / 2];

const way = [0, 0, 0];

let frame = 0;

for(let i = 0; i < 30; i++){
    balls.push([innerWidth / 2, innerHeight / 2])
}

body.onclick = e => {
    // 클릭한 위치를 dest로 받아온다.
    // first는 현재 공의 위치로 초기화 한다.
    // frame 도 0으로 초기화한다.
    // way[0]과 way[1]은 dest에서 first를 뺀 값으로 한다.
    // way[2]는 dest에서 first까지의 거리(피타고라스의 정리)를 speed로 나눈 값으로 한다.
};

const main = () => {
    // balls는 항상 pops과 unshift된다.
    // 만약 움직이고 있는 중이라면 dest와 first을 (frame : way[2] - frame) 으로 내분한 만큼 움직인다.
    // frame은 매 애니메이션마다 1씩 커진다.
    // 만약 frame이 way[2]와 같아지면 frame과 way[2]를 0으로 초기화 한다.
    
    // 움직이지 않는 경우 balls[0]의 값을 공의 현재 위치로 취급한다.
    
    // 공은 항상 움직임이 업데이트된다.
    // box-shadow도 업데이트 되는데 처음 그림자의 색은 rgba(255,0,0,0.2) 이며 마지막은 rgba(255,0,0,0) 까지 줄어들도록 한다.
    // 그림자의 개수는 balls 배열의 크기만큼이며 다중 그림자를 하는 방법은 https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow 를 참고바람
    requestAnimationFrame(main);
};

main();