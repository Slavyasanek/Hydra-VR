import { header } from "./header-scroll";

export const openBtnMenu = document.querySelector('.js-menu-open');
export const mobileMenu = document.querySelector('.mobile-menu');

if (openBtnMenu) {
    openBtnMenu.addEventListener('click', () => {
        document.body.classList.toggle('lock');
        mobileMenu.classList.toggle('active');
        openBtnMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            header.classList.remove('header--background');
        } else {
            header.classList.add('header--background');
        }
    });
}

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('lock');
        openBtnMenu.classList.remove('active');
    }
})
