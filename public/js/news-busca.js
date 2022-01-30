const btn = document.getElementsByClassName('busca-btn')[0]
const busca = document.getElementsByClassName('news-busca')[0]

console.log(btn);

btn.onclick = function () {
    console.log('aaaaa');
    busca.classList.toggle('busca-open')
}