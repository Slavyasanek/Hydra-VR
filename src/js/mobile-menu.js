export const openBtnMenu = document.querySelector('.js-menu-open');
export const mobileMenu = document.querySelector('.mobile-menu');

openBtnMenu.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    mobileMenu.classList.toggle('active');
    openBtnMenu.classList.toggle('active');
})