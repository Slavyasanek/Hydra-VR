import { headerHeight } from "./header-scroll";

menuLinks = document.querySelectorAll('a[data-goto]');

// ! Метод Element.getBoundingClientRect() 
// повертає об’єкт DOMRect, надаючи інформацію 
// про розмір елемента та його положення відносно вікна перегляду.
// left, top, right, bottom, x, y, width, and height


if (menuLinks.length > 0) {
    const onMenuLinkClick = (event) => {
        event.preventDefault();
        const menuLink = event.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - headerHeight;
            window.scrollTo({
                top: goToBlockValue - 20,
                behavior: 'smooth'
            });
            const activeSection = document.querySelectorAll('.active');
            console.log(activeSection);
            if (activeSection.length > 0) {
                activeSection[0].classList.remove('active');
            }
            menuLink.parentNode.classList.add('active');
        }
    }
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}
