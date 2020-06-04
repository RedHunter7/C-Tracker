const menu = document.getElementById('menu');
const arrowBtn = document.getElementById('arrowBtn');

arrowBtn.addEventListener('click', () => {
    console.log('hey');
    menu.classList.toggle('showMenu');
    arrowBtn.classList.toggle('showMenu');
});

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        nav.classList.add('onScroll');
    } else {
        nav.classList.remove('onScroll');
    }
})