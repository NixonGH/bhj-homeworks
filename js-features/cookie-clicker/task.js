const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clicks = 0;
let isEnlarged = false;

cookie.addEventListener('click', function () {
    clicks++;
    counter.textContent = clicks;

    if (isEnlarged) {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
    } else {
        cookie.style.width = '220px';
        cookie.style.height = '220px';
    }

    isEnlarged = !isEnlarged;
});