class RainManage{
    // Rain의 인스턴스들을 묶음으로 관리해주는 클래스
    constructor(par:HTMLElement){
        // par는 기록
    }
    add(rain:Rain){
        // rain을 arr에 추가하는 코드
        // par에도 추가해야됨
        // class를 c0 ~ c3을 count에 따라 추가함
        // count를 사용
    }
    nextAll(){
        // arr에서 next를 모두 실행해줌
        // 만약 posY가 넘은 것이 있다면 제거
    }
}

class Rain{
    // Rain과 관련된 document와 각종 값들 기록
    constructor(size:number, posX:number, duration:number){
        // size는 받은 값에 0.2를 더한 값을 width로 해줌
        // left에 posX 값만큼
        // duration은 기록
    }
    next(){
        // posY 값이 계속 증가 (duration 개수만큼 증가해서 0 ~ 100까지 증가)
        // 그 값을 transform에 반영함 0 ~ 100vh + 200px
    }
}

const arr = new RainManage(document.querySelector('body'));

function rain() {
    const amount = 5;
    // 매번 3개씩 rain을 arr에 추가
    // 매번 nextAll을 실행
    requestAnimationFrame(rain);
}

rain();