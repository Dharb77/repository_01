/*
    menu : 메뉴 부분
    div : 크기를 변경할 박스
    mouse : 왼쪽을 클릭했을 경우 height <- width 가 표시
            오른쪽을 클릭했을 경우 width <- height 가 표시
    wheel : 변하는 px 속도 출력 (60hz 기준)
    keyArr : 왼쪽, 오른쪽, 위, 아래, 왼쪽클릭, 오른쪽클릭 상태 배열
    boxInfo : 박스의 정보를 모아둔 객체
*/

const menu = document.querySelector<HTMLDivElement>('#menu');
const div = document.querySelector<HTMLDivElement>('#box');
const mouse = document.querySelector<HTMLDivElement>('#menu > .mouse');
const wheel = document.querySelector<HTMLDivElement>('#menu > .wheel');
const keyArr = [0, 0, 0, 0, 0, 0];
const boxInfo = {
    width:100, height:100, speed:60
};
const change = (str:string, num:number) => {
    // str : 누른 키보드의 문자열
    // num : 바꿀 숫자 (0, 1)
};

window.oncontextmenu = eventX;
window.onclick = eventX;
window.onkeyup = eventX;
window.onkeydown = eventX;

// 휠 이벤트 https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent 에서 deltaY 확인
window.onwheel = eventX;

function eventX(e:Event):void{
    e.preventDefault();
    // e 가 어떤 instance인지에 따라서 다르게 동작하도록 한다.
    
    // 휠 동작
    // 위로 마우스 휠을 돌릴 때 속도가 1씩 증가하고, 화면에도 표시된다.
    // 아래로 마우스 휠을 돌릴 때 속도가 1씩 감소하고, 화면에도 표시된다.
    // 0 미만으로는 내려가지 않는다.
    

    // 마우스 동작
    // 왼쪽클릭과 오른쪽클릭을 했을 때 다르게 동작
    // 키보드와 다르게 한쪽을 클릭하면 다른쪽을 0으로 바꿔야함

    // 키보드 동작
    // e.type 이 무엇인지에 따라 다르게 동작
    // keydown, keyup
}

function move(){
    // 먼저 boxInfo 객체를 바꾸고 style 적용하기
    // 키보드의 동작과 마우스의 동작에 따라 잘 움직이게 하기
    // 만약 너비 또는 높이가 키보드로 움직이는 상태가 아닌 경우엔 마우스의 동작으로 변경
    // 너비와 높이가 같아질 때 진동하는 경우는 없게 하기 (길이가 애매해서 진동하는 경우)

    requestAnimationFrame(move);
}

move();