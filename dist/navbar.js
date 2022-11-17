//navbar fix
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offset;

    if (windowpage.pageY0ffset > fixedNav) {
        header.classList.add('a-fixed');
    } else {
        header.classList.remove(a - fixed);
    }
}
//hamburger
const hamburger = document.querySelector('#hamburger')
const navmenu = document.querySelector('#navMenu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle("hamburger-active");
    navmenu.classList.toggle('hidden');
}
);