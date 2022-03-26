interface Fun{
    ():void;
}

const inp = document.querySelector<HTMLInputElement>('#inp');
const but = document.querySelector<HTMLButtonElement>('#but');
const con = document.querySelector<HTMLDivElement>('#con');

const makeEvent = (num:number, tag:HTMLElement, fun:Fun) => {
    // num 횟수에 따라서 fun을 실행하는 이벤트 생성
    // num 횟수만큼의 이벤트 실행후 tag 제거
    // num을 다른 곳에 할당하거나 기록하지 않는다!!!
    if(num === 0){
        tag.remove();
    }else{
        tag.addEventListener('click', () => {
            alert(num);
            makeEvent(num - 1, tag, fun);
        }, {once:true});
    }
};

but.addEventListener('click', e => {
    if(inp.validity.valid){
        // inp.value을 makeEvent에 인자로
        // 버튼을 makeEvent의 생성 후 con에 할당
        const btn = document.createElement('button');
        btn.innerHTML = 'button';
        makeEvent(Number(inp.value), btn, () => {
            
        });
        con.appendChild(btn);
    }
});