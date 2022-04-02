interface AllEvent extends HTMLElementEventMap, WindowEventHandlersEventMap{}

function addEvent<K extends keyof AllEvent>(target:EventTarget, type: K):Promise<AllEvent[K]>;
function addEvent(target:EventTarget, type: string): Promise<Event>{
    return new Promise(res => {
        target.addEventListener(type, res, {once:true});
    });
}

// 이 예제는 File System Access API를 사용했습니다.
// 아래의 문서를 읽고 openFolder 함수를 완성해보세요!
// https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

const con = document.querySelector<HTMLDivElement>('#con');
const btn = document.querySelector<HTMLButtonElement>('#btn');
const map = new Map<HTMLElement,FileSystemHandle>();
const eventMap = new Map<EventTarget,Promise<Event>>();
const urlMap = new Map<EventTarget,string>();

async function openFolder(dir:FileSystemDirectoryHandle, par:HTMLElement){
    const children = document.createElement('div');
    children.classList.add('children');
    par.appendChild(children);

    // 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for-await...of
    for await (let [name, file] of dir){

        /*
            !!!문제 1번!!!
            하나의 div를 만들고 dataset.type에 받은 file.kind를 할당한다.
            각각 button과 img, name을 넣을 span태그를 생성한다.
            img는 ./img/directory.svg와 ./img/file.svg 둘 중에서 적절히 src로 설정한다.
            만약 file이 directory라면 (file instanceof FileSystemDirectoryHandle)
                img2를 하나 더 생성해서 넣는다.
                img2는 ./img/open.svg를 src로한다.
                그 img2는 open 클래스를 추가한다.
            생성한 file은 map의 div를 key로, file를 value로 할당한다.
            이 div 들을 children에 추가한다.
        */
       break;
    }
}


(async()=>{
    while(true){
        await addEvent(btn, 'click');
        try{
            /*
                참고 : https://developer.mozilla.org/en-US/docs/Web/API/window/showDirectoryPicker
            */
            const dir = await showDirectoryPicker();
            await openFolder(dir, con);
            break;
        } catch(err){}
    }
    btn.remove();

    eventMap.set(con, addEvent(con, 'click'));

    while(true){
        /*
            !!!문제 2번!!!
            evt의 코드를 바꿔야 한다.
            eventMap에는 value값으로 모든 이벤트를 관리한다.
            evt = 에 알맞은 코드를 작성하시오
        */
         const evt = new Event('click');
        const tar = evt.target;
        if(evt.type === 'click'){
            eventMap.set(con, addEvent(con, 'click'));
            if(tar instanceof HTMLButtonElement){
                const par = tar.parentElement;
                if(par.dataset.type === 'directory'){
                    // 폴더를 클릭했을 때의 행동
                    par.classList.toggle('open');
                    if(par.classList.contains('open')){
                        const handle = map.get(par) as FileSystemDirectoryHandle;
                        await openFolder(handle, par);
                    } else {
                        par.querySelector('.children').remove();
                    }
                } else {
                    // 파일을 클릭했을 때의 코드
                    const handle = map.get(par) as FileSystemFileHandle;
                    const file = await handle.getFile();
                    const url = URL.createObjectURL(file);
                    let type = 'text';
                    if(file.type.includes('image')){
                        type = 'image';
                    } else if(file.type.includes('video')){
                        type = 'video';
                    } else if(file.type.includes('audio')){
                        type = 'audio';
                    }

                    // iframe.html을 꼭 같은 폴더 안에 넣어야한다.
                    // 참고 : https://developer.mozilla.org/ko/docs/Web/API/Window/open
                    const open = window.open(`./iframe.html?type=${type}&src=${url}`);
                    urlMap.set(open, url);

                    // unload 이벤트는 창이 닫혔을 때의 이벤트
                    eventMap.set(open, addEvent(open, 'unload'));
                }
            }
        } else if(evt.type === 'unload') {
            // 열린 창이 닫혔을 때의 코드
            const cur = evt.currentTarget as Window;
            if(cur.location.href === 'about:blank') {
                eventMap.set(cur, addEvent(cur, 'unload'));
                continue;
            }

            // URL을 revoke해서 메모리 관리를 해준다.
            eventMap.delete(cur);
            const url = urlMap.get(cur);
            URL.revokeObjectURL(url);
            urlMap.delete(cur);
            eventMap.delete(cur);
        }
    }
})();