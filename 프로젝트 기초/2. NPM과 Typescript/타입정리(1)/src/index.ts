// 기본 타입
// 숫자 타입으로 지정
let num;

// 문자 타입으로 지정
let str;

// 불리안 타입으로 지정
let bool;

// 섞인 타입
// 숫자 배열 예) [1, 2, 3, 4, 5]
let numArr;

// 문자열 이중 배열 예) [['a', 'b', 'c'], ['d', 'e', 'f']]
let strArr;

// [숫자 문자열] 튜플 배열 예) [[1, 'a'], [2, 'b'], [3, 'c']]
let T1T2;

// [숫자배열 문자배열]의 튜플 예) [[1, 2, 3, 4, 5], ['a', 'b', 'c']]
let T12;

// 태그
// id가 container인 div태그 받아오기
let div;

// class가 c1인 p태그 받아오기
let p;

// data-id가 active인 td 태그 모두 받아오기
let tds;

// data-id에 ch라는 글자가 포함된 tr 태그 모두 받아오기
let tr;

// 숫자, 문자, 불리안을 순서대로 받고, return 값이 없음
let fun1;

// click 이벤트에 들어가는 함수
function fun2(){}

window.onclick = fun2;

// 코드까지 작성해주세요.
// 문자열을 모두 이중배열로 만드는 map 메소드
// ['abc', 'de', 'fghi'] 의 결과는 [['a', 'b', 'c'], ['d', 'e'], ['f', 'g', 'h', 'i']]
let fun3;


// 코드까지 작성해주세요.
// 모든 타입의 이중 배열을 단일 배열로 만드는 reduce
// [['a', 1, 'c'], ['d', 2], ['f', 3, 'h', true]] 의 결과는 ['a', 1, 'c', 'd', 2, 'f', 3, 'h', true]
let fun4;


let a:any;

// if문 안에 적절한 타입 좁히기를 하세요.
if(a){
    console.log('숫자입니다.');
} else if(a){
    console.log('문자열입니다.');
} else {
    console.log('나머지입니다.');
}


// if문 안에 적절한 타입 좁히기를 하세요.
let b:HTMLElement;

if(b){
    console.log('select 태그입니다.');
} else if(b){
    console.log('input 태그입니다.')
} else if(b){
    console.log('option 태그입니다.');
}

const fun5 = (e:Event) => {
    if(e){
        console.log('마우스 이벤트');
    } else if(e){
        console.log('키보드 이벤트');
    } else if(e){
        console.log('포커스 이벤트');
    }
}

window.onfocus = fun5;
window.onclick = fun5;
window.onkeydown = fun5;