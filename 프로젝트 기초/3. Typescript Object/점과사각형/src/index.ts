const container = document.querySelector<HTMLDivElement>('#container');

class Point{
    x:number;
    y:number;
    div = document.createElement('div');
    rects = new Set<Rect>();
    constructor(x:number, y:number){
        // 점은 x, y 좌표를 받고 dot 클래스가 있는 div를 만든다.
        // 점의 위치는 x, y가 중심이 되도록 한다.
        // appendChild는 하지 않는다.
    }
    add(r:Rect){
        // 이 점과 관련된 사각형을 rects 배열에 add
    }
    remove(r:Rect){
        // r 을 delete
    }
}

class Rect{
    x:number;
    y:number;
    w:number;
    h:number;
    points:[Point, Point] = [null, null];
    div = document.createElement('div');
    constructor(p1:Point, p2:Point){
        // 받은 두 포인터를 points 튜플에 할당한다
        // 각 포인터에 해당 rect를 추가한다.
        // rect 클래스를 추가한다.
        // 너비와 높이와 위치는 적절히 만든다
        // 배경색은 랜덤한 색으로
        // appendChild는 하지 않는다.
    }
    remove(){
        // 해당 사각형을 지운다.
        // 참고로 포인터의 rects 배열에서도 지워야 할 듯
    }
}

class Manager{
    points = new Map<HTMLElement,Point>();
    rects = new Map<HTMLElement,Rect>();
    par:HTMLElement;
    selected:Point = null;
    constructor(par:HTMLElement){
        this.par = par;
    }
    addPoint(p:Point){
        // point를 추가 (appendChild 포함)
    }
    addRect(r:Rect){
        // rect를 추가 (appendChild 포함)
    }
    removePoint(div:HTMLElement){
        // div를 받아서 해당 div를 갖는 point를 get
        // 포인트를 지움
    }
    removeRect(div:HTMLElement){
        // div를 받아서 해당 div를 갖는 rect를 get
        // rect를 지움
    }
    select(div:HTMLElement){
        // div를 받아서 해당 div를 갖는 point를 get
        // 만약 this.selected에 아무것도 없으면 selected에 point를 할당한다.
        // 만약 이미 있는데 자기 자신이라면 this.selected 를 null로 한다.
        // 만약 이미 있는데 다른 것이라면 두 point를 대각선으로 갖는 직사각형을 만든다.
        // Rect를 와 addRect 호출
    }
}

const PM = new Manager(container);

container.onclick = e => {
    e.preventDefault();
    const tar = e.target as HTMLDivElement;
    if(tar === container){
        const point = new Point(e.clientX, e.clientY);
        PM.addPoint(point);
    } else if(tar.classList.contains('dot')){
        PM.select(tar);
    }
};

container.oncontextmenu = e => {
    e.preventDefault();
    const tar = e.target as HTMLDivElement;
    if(tar.classList.contains('dot')){
        PM.removePoint(tar);
    } else if(tar.classList.contains('rect')){
        PM.removeRect(tar);
    }
};