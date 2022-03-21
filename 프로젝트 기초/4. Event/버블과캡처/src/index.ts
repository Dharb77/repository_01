const root = document.querySelector<HTMLDivElement>('#con > .node');
let left = 50;
let count = 0;
let i = 0;

const isLeaf = (e:MouseEvent) => {
    // 캡처링 동작
    // 만약 leaf (마지막)을 선택하지 않은 경우에는 동작하지 않고 error 클래스가 발생하도록 한다.
    // leaf인지 아닌지 아는 방법은 count와 eventPhase를 이용한다.
};

const fun = (e:MouseEvent) => {
    // 버블링 동작
    // dataset의 num을 버블링에 따라 1씩 증가시킨다
    // innerHTML을 사용하지 않아도 dataset.num의 값만 바꾸면 숫자가 자동으로 보인다.
    // sel을 추가했다가 바로 제거 (setTimeout을 사용)해서 애니메이션 효과를 준다.
};

while(true){
    // nodes를 계속 고르는데 점점 안에 있는 node들을 선택한다.
    // selector를 잘 작성하길 바람 (string.prototype.repeat 사용)
    // 각 node는 left값이 주어지는데 이때, 첫째줄은 50, 둘째줄은 -25, 25, 그다음은 -12.5, 12.5 이런식으로 2씩 나눠지면서 내려간다.
    // 모든 node는 fun을 버블링 이벤트로, isLeaf를 캡처링 이벤트로 갖는다
    // 만약 nodes에 더 이상 node들이 검색되지 않으면 while을 빠져나온다.
    // count 는 빠져나오기 전의 i 값으로 한다.
    break;
}

root.style.setProperty('--top', `calc((100vh - 50px) / ${count - 1})`);