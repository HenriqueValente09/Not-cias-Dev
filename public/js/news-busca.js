const btn = document.getElementsByClassName('busca-btn')[0]
const busca = document.getElementsByClassName('news-busca')[0]

btn.onclick = function () {
    busca.classList.toggle('busca-open')
}

const newsMenu = document.getElementsByClassName('news-menu')[0]
const mobileNav = document.getElementsByClassName('mobile-nav')[0]

newsMenu.onclick = function () {
    mobileNav.classList.toggle('mobile-nav-hide')
    newsMenu.classList.toggle('change')
}