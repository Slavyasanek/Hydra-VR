import { headerHeight } from "./header-scroll";

menuLinks = document.querySelectorAll('[data-goto]');

// ! Метод Element.getBoundingClientRect() 
// повертає об’єкт DOMRect, надаючи інформацію 
// про розмір елемента та його положення відносно вікна перегляду.
// left, top, right, bottom, x, y, width, and height


if (menuLinks.length > 0) {
    const onMenuLinkClick = (event) => {
        const menuLink = event.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - headerHeight;
            window.scrollTo({
                top: goToBlockValue - 20,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
    }
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

