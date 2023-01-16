const fileInput = document.querySelector('input');
const downBtn = document.querySelector('button');

downBtn.addEventListener('click', e => {
    e.preventDefault();
    downBtn.innerText = 'Downloading file...'
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let temUrl = URL.createObjectURL(file);
        let a = document.createElement('a');
        a.href = temUrl;
        a.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(temUrl);
        downBtn.innerText = 'Downloading file...'
    }).catch (() => {
        downBtn.innerText = 'Downloading file...'
        alert('Failed to download file!')
    })
}


