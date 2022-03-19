const troll = document.querySelector<HTMLDivElement>('#troll');
const input = document.querySelector('input');

// X의 constructor에 쓰일 객체
// width는 주변을 도는 위성의 크기
// speed는 움직이는 속도
interface Par{
    el:HTMLDivElement;
    color:string;
    width:number;
    speed:number;
}

// position에서 위치를 변경할 때 쓰이는 속성들의 유니온 타입
type LRTB = 'left'|'right'|'top'|'bottom';

class X{
    span = document.createElement('span');
    par:HTMLDivElement;
    color:string;
    speed:number;
    
    // 원래 크기
    ori:number;
    width:number;
    height:number;

    // 0, 1, 2, 3으로 이루어져있는 숫자
    // 0일때는 left에서 right
    // 1일때는 top에서 bottom
    // 2일때는 right에서 left
    // 3일때는 bottom에서 top
    way = 0;

    // 이 배열은 써도 되고 쓰지 않아도 됨
    // 단 마지막의 각도는 linear-gradient의 속성을 변경할 때 쓰임
    arr:['width'|'height', LRTB, LRTB, string][] = [
        ['width', 'left', 'right', '0deg'],
        ['height', 'top', 'bottom', '90deg'],
        ['width', 'right', 'left', '180deg'],
        ['height', 'bottom', 'top', '-90deg']
    ];
    constructor(par:Par){
        // 적절하게 속성을 대입한다.
        // `linear-gradient(-90deg, ${par.color} ${par.width}px, transparent)`; 로 background를 준다.
        // 참고 : https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()
        // left, top을 0을 주고, 그 이후로는 계속 위치를 주는 방법이 달라진다.
        // left에서 right로 갈때는 width가 끝까지 커졌다가 원래대로 작아진다.
    }
    next(){
        // 이 함수를 호출할 때마다 계속 상태가 업데이트 된다.
        // 처음에는 width가 계속 커지다가 원래 par보다 커지면 left = '', right = '0'으로 된다.
        // 그 후 다시 width가 작아지다가 원래 크기 (this.ori)에 도달하면 다음 상태 (this.way) 로 넘어간다
        // 그 다음은 height가 이 상태를 반복하고, this.way가 4에 도달하면 다시 0의 상태로 된다.
    }
    apply(){
        // this.width와 this.height를 변경한 상태를 실제 style에 적용
    }
}

const x = new X({
    color:'red',
    el:troll,
    speed:15,
    width:10
});

const main = () => {
    x.next();
    requestAnimationFrame(main);
};

main();