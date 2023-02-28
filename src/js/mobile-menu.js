const openBtnMenu = document.querySelector('.js-menu-open');
const mobileMenu = document.querySelector('.mobile-menu');

openBtnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})