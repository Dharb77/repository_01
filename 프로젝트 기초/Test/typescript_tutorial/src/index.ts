const file = document.querySelector<HTMLInputElement>('input');

file?.addEventListener('input', e => {
    console.log(file.files);
})