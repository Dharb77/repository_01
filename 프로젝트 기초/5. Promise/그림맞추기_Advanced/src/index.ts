// 이벤트는 addEvent만 사용해서 코드를 작성해주세요.
// 이 파일은 type="module" 이 설정되어 있기 때문에 global에 await 를 사용할 수 있습니다.

function addEvent<K extends keyof HTMLElementEventMap>(target:EventTarget, type: K):Promise<HTMLElementEventMap[K]>;
function addEvent(target:EventTarget, type: string): Promise<Event>{
    return new Promise(res => {
        target.addEventListener(type, res, {once:true});
    });
}

class Change{
    max:number;
    frame = 0;
    p1:HTMLElement;
    p2:HTMLElement;
    x1:number;
    y1:number;
    x2:number;
    y2:number;

    // p1, p2가 frame 만큼의 애니메이션 후 서로 교체되는 클래스
    constructor(p1:HTMLElement, p2:HTMLElement, frame:number){
        this.p1 = p1;
        this.p2 = p2;

        this.x1 = (Number(this.p2.dataset.x) - Number(this.p1.dataset.x)) * SIZE;
        this.y1 = (Number(this.p2.dataset.y) - Number(this.p1.dataset.y)) * SIZE;
        this.x2 = -this.x1;
        this.y2 = -this.y1;
        this.max = frame;
    }
    next(){
        /* 매 호출마다 애니메이션
            호출 마다 frame은 1씩 증가한다.
            frame값의 비율과 max의 비율에 맞춰 서로 translate한다.
            각각 this.p1은 this.x1, this.y1 쪽으로 움직이며
            this.p2는 this.x2, this.y2 쪽으로 움직인다.
            frame이 max에 도달했을 경우 translate값을 초기화한다.
            그 후 서로의 dataset.xi, dataset.yi 값을 교체한다.
            changePos 호출 후 return true 한다.
            나머지의 경우 return false 한다.
        */
        return false;
    }
}

const puzzleContainer = document.querySelector<HTMLDivElement>('#puzzle-container');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const way = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
];
let shuffle = addEvent(button, 'click');
let puzzleClick = addEvent(puzzleContainer, 'click');

const LEN = 4;
const SIZE = 600 / LEN;
const SHUFFLE_SPEED = 3;
const SPEED = 10;

let change:Change = null;

for(let i = 0; i < LEN * LEN; i++){
    const puzzle = document.createElement('div');
    puzzle.classList.add('puzzle');
    puzzle.dataset.x = String(i % LEN);
    puzzle.dataset.y = String(Math.floor(i / LEN));
    puzzle.dataset.xi = String(i % LEN);
    puzzle.dataset.yi = String(Math.floor(i / LEN));
    puzzle.style.width = `calc(100% / ${LEN})`;
    puzzle.style.height = `calc(100% / ${LEN})`;
    puzzle.style.backgroundSize = `calc(100% * ${LEN}) calc(100% * ${LEN})`;
    changePos(puzzle);
    puzzleContainer.appendChild(puzzle);
}

function changePos(puzzle:HTMLElement){
   /* 퍼즐의 현재 backgroundPosition 교체하기
        puzzle의 dataset.xi, dataset.yi의 값을 갖고 backgroundPosition 값을 바꿔서 적용한다.
        만약 xi값과 yi 값이 LEN - 1 이면 none 클래스를 추가한다.
        그렇지 않을 경우 none 클래스를 제거한다.
   */
}

function getEmpty(){
    return document.querySelector<HTMLElement>('.none');
}

function isClear(){
    /* 게임을 클리어 했는지 알아보기
        모든 dataset.x의 값이 xi값과, dataset.y의 값이 yi 값과 같으면 true 아니면 false를 리턴한다.
    */
    return false;
}

function main(){
    if(button.classList.contains('shuffle')){
        /* 셔플하고 있을 경우
            change가 없을 경우 빈 곳과 그 주변을 랜덤하게 고른 후 두 태그를 교체한다.
            이 과정을 계속 반복한다.
        */
    } else if(change){
        /* 현재 애니메이션이 진행되는 경우
            change.next를 호출리턴 값이 true면
            change에 null값을 할당 후 isClear를 호출한다.
            isClear가 true면 h1에 clear 클래스 추가
            그렇지 않으면 clear 클래스를 제거한다.
        */
    }
    requestAnimationFrame(main);
}

main();

while(true){
    /* 이벤트 관리
        puzzleClick과 shuffle 이벤트 두 이벤트 중에서 먼저 발생하는 이벤트를 받는다.
        만약 shuffle이 발생할 경우 button 에 shuffle 클래스를 토글한다.
        만약 puzzleClick이 발생할 경우 
        클릭한 puzzle과 빈 곳이 서로 붙어있는 지 확인후
        붙어있다면 서로 교체하고
        그렇지 않으면 아무일도 하지 않는다.
        (중요!!!) 두 경우 다 이벤트를 새로 발생시켜야한다.
    */
    break;
}

export {};