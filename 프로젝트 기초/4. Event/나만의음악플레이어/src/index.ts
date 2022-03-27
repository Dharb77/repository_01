interface iBlob{
    name:string
    blob:Blob;
    thum:Blob;
}

interface iList{
    id:string;
    index:string;
    name:string
    blob:string;
    thum:string;
}

interface iMusicList{
    [key:string]:{blob:Blob, thum:Blob}
}

interface iMusicPlayer{
    list:HTMLTableSectionElement;
    range:HTMLInputElement;
    time:HTMLElement;
    thum:HTMLElement;
    button:HTMLElement;
}

class MusicPlayer implements iMusicPlayer{
    arr:iList[] = [];
    list:HTMLTableSectionElement;
    range:HTMLInputElement;
    time:HTMLElement;
    thum:HTMLElement;
    button: HTMLElement;
    audio = document.createElement('audio');
    cur:iList;
    constructor({list, range, time, button}:iMusicPlayer){
        const audio = this.audio;
        // list는 tbody 태그
        // range는 시간 조절
        // time은 시간
        // button은 음악 추가 버튼
        this.list = list;
        this.range = range;
        this.time = time;
        this.button = button;

        // 아래 코드 작성을 위해서 해당 링크를 찾아볼 것!!!
        // https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio
            

        audio.addEventListener('canplaythrough', e => {
            // 이 때는 audio.duration 을 사용해서 range의 max 값을 바꾼다. O
            range.max = String(audio.duration);
        });

        audio.addEventListener('ended', e => {
            // 이 때는 다음 오디오를 적절하게 찾아서 재생한다.
        });

        button.addEventListener('click', e => {
            const arr:iMusicList = {};
            const file = document.createElement('input');
            file.type = 'file';
            file.multiple = true;
            file.addEventListener('input', e => {
                // files의 값들을 받아와서 arr에 적절하게 등록한다.
                // arr은 key가 음악 이름, value는 blob(음악)과 thum(이미지)인 객체이다.
                // key 값은 확장자명을 제외한 값이다. (예 music.mp3 X, music O)
                // type을 잘 판단하여 blob과 thum에 적절하게 넣어준다.
                // 잘 분류된 arr을 갖고, musics.push 메소드를 호출한다.
                // 만약 thum만 있는 경우에는 setThum을 호출한다.
                
            }, {once:true});
            file.click();
        });

        list.addEventListener('click', e => {
            // 적절한 tr 태그를 찾은 후 this.select를 호출한다.
        });

        range.addEventListener('input', e => {
            // 음악 시간을 range.value로 맞춘다. O
            // currentTime을 잘 사용 O
            audio.currentTime = Number(range.value);
        });

        const play = () => {
            // 시간과 range.value를 음악 시간에 맞춘다. O
            time.innerHTML = String(audio.currentTime.toFixed(2));
            range.value = String(audio.currentTime.toFixed(2));
            requestAnimationFrame(play);
        };

        play();
    }
    push(obj:iBlob){
        const index = String(this.list.children.length);
        const id = String(Math.random());
        const newObj:iList = {
            id,
            index,
            name: obj.name,
            blob: '',
            thum:'',
        };
        // blob과 thum은 URL.createObjectURL을 호출하거나 한다.
        // 이미지는 있는 경우 넣고 있지 않는 경우에는 넣지 않는다.
        

        // 적절하게 tr을 생성 후 list에 넣는다.

        // newObj도 this.arr에 넣는다.

        /* 샘플 tr 모양
            <tr data-id="0.11529641174731742">
                <td>1</td>
                <td>
                    <div
                        style="background-image:url('blob:http://192.168.219.103:5500/c9bd174a-1218-4bee-a1d6-84ea9b81ef12')">
                    </div>
                </td>
                <td>(밝혀짐)</td>
            </tr>
        */
    }
    select(tar:HTMLTableRowElement){
        // this.get을 호출하여 data를 얻는다
        // 선택한 tr태그를 이미 선택했었다면
            // 이미 재생중인 (audio.puased) 찾아보기 경우 pause 하고, 테이블의 맨 앞쪽을 ⏸️로 바꾼다.
            // 그렇지 않은 경우 play 하고, ⏩로 바꾼다.
        // 이미 선택하지 않았더라면
            // 그 전 선택한 tr을 찾아서 선택을 지운다.
            // 현재 선택한 tr을 sel을 추가하고, thum을 tr의 thum으로 바꾼다
            // 맨 앞쪽 테이블을 ⏩로 바꾸고 play한다.
        console.log(this.get);
    }
    get(id:string){
        // 해당 id를 갖고 있는 iList를 this.arr에서 찾는다.
    }
    setThum(name:string, thum:Blob){
        // 해당 name에 해당하는 data를 찾아서 thum을 바꾼다.
    }
}

const musics = new MusicPlayer({
    list: document.querySelector<HTMLTableSectionElement>('#list'), 
    range: document.querySelector<HTMLInputElement>('#range'), 
    time:document.querySelector<HTMLDivElement>('#time'),
    button: document.querySelector<HTMLButtonElement>('#file'),
    thum: document.querySelector<HTMLImageElement>('#thum')
});