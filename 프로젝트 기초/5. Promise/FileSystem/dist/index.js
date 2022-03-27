function addEvent(target, type) {
    return new Promise(res => {
        target.addEventListener(type, res, { once: true });
    });
}
const con = document.querySelector('#con');
const btn = document.querySelector('#btn');
const map = new Map();
const eventMap = new Map();
const urlMap = new Map();
async function openFolder(dir, par) {
    const children = document.createElement('div');
    children.classList.add('children');
    par.appendChild(children);
    for await (let [name, file] of dir) {
        break;
    }
}
(async () => {
    while (true) {
        await addEvent(btn, 'click');
        try {
            const dir = await showDirectoryPicker();
            await openFolder(dir, con);
            break;
        }
        catch (err) { }
    }
    btn.remove();
    eventMap.set(con, addEvent(con, 'click'));
    while (true) {
        const evt = new Event('click');
        const tar = evt.target;
        if (evt.type === 'click') {
            eventMap.set(con, addEvent(con, 'click'));
            if (tar instanceof HTMLButtonElement) {
                const par = tar.parentElement;
                if (par.dataset.type === 'directory') {
                    par.classList.toggle('open');
                    if (par.classList.contains('open')) {
                        const handle = map.get(par);
                        await openFolder(handle, par);
                    }
                    else {
                        par.querySelector('.children').remove();
                    }
                }
                else {
                    const handle = map.get(par);
                    const file = await handle.getFile();
                    const url = URL.createObjectURL(file);
                    let type = 'text';
                    if (file.type.includes('image')) {
                        type = 'image';
                    }
                    else if (file.type.includes('video')) {
                        type = 'video';
                    }
                    else if (file.type.includes('audio')) {
                        type = 'audio';
                    }
                    const open = window.open(`./iframe.html?type=${type}&src=${url}`);
                    urlMap.set(open, url);
                    eventMap.set(open, addEvent(open, 'unload'));
                }
            }
        }
        else if (evt.type === 'unload') {
            const cur = evt.currentTarget;
            if (cur.location.href === 'about:blank') {
                eventMap.set(cur, addEvent(cur, 'unload'));
                continue;
            }
            eventMap.delete(cur);
            const url = urlMap.get(cur);
            URL.revokeObjectURL(url);
            urlMap.delete(cur);
            eventMap.delete(cur);
        }
    }
})();
//# sourceMappingURL=index.js.map