// 숫자와 문자
type NS = null;

// 불리안과 숫자
type BN = null;

// 문자열과 문자배열
type SSA = null;

// 수,문,불 튜플의 배열
type TA = null;

// a 속성은 숫자, c 속성은 있을 수도 있는 문자, e 메소드는 onclick에 쓰이는 함수
interface OB{

}

// 아래 add 함수에 쓰일 적절한 타입
// (숫자)
interface fun{

}

// const add:fun = (a, b) => a + b;


// 아래 join 함수에 쓰일 적절한 타입
interface fun2{

}

// const join:fun2 = (...str) => str.join(', ');


// void를 리턴하는 함수
interface FV{

}

// setTimeout의 정의 (FV를 사용하기)
interface Time{
    
}


// name 속성은 문자, age 속성은 없을 수도 있는 숫자
interface Obj{

}

// 아래 makeInfo의 함수의 타입을 적절히 작성
// name은 문자열, age는 숫자
interface fun3{

}

// const makeInfo:fun3 = (name, age) => {
//     const obj:Obj = { name };
//     if(typeof age !== 'undefined'){
//         obj.age = age;
//     }
//     return obj;
// };


// 아래 Rect 클래스의 타입을 적절히 작성
interface iRect{
    
}

class Rect implements iRect{
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x:number, y:number, width:number, height:number){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }
    area(): number {
        return this.w * this.h;
    }
    translate(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}