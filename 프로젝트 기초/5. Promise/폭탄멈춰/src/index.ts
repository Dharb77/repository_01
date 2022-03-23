const inp = document.querySelector<HTMLInputElement>('#inp');
const con = document.querySelector<HTMLDivElement>('#con');
const time = document.querySelector<HTMLSpanElement>('#time');
const bomb = document.querySelector<HTMLSpanElement>('#bomb');
const button = document.querySelector<HTMLSpanElement>('#stop');

const set = () => new Promise(res => {
    setTimeout(res, 10);
});

function addEvent<K extends keyof HTMLElementEventMap>(target:HTMLElement, type: K):Promise<HTMLElementEventMap[K]>;
function addEvent(target:HTMLElement, type: string): Promise<Event>{
    return new Promise(res => {
        target.addEventListener(type, res, {once:true});
    });
}


(async()=>{
    while(true){
        /* addEventListener를 쓰지 않고, set과 addEvent만을 이용해서 코드 작성하기 */
        /* input태그에 시간 입력 후 Enter를 누르면 폭탄이 나오면서 (noshow 클래스 사용) 타이머가 10ms 단위로 작동 */
        /* 만약 0초 전에 누르면 폭탄 제거 완료!!! 라고 뜨며 button 내용 바뀜 (end 클래스 사용) */
        /* 만약 0초가 지나버리면 폭발해버리고 폭탄 제거 실패;;; 라고 뜨며 button 내용 바뀜 */
        /* 위의 과정을 반복함 */
        break;
    }
})();