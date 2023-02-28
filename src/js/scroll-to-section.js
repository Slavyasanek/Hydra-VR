import { headerHeight } from "./header-scroll";
import { openBtnMenu, mobileMenu } from "./mobile-menu";

const menuLinks = document.querySelectorAll('a[data-goto]');

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
            if(openBtnMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                mobileMenu.classList.remove('active');
                openBtnMenu.classList.remove('active');
            }
            
            const activeSection = document.querySelectorAll('.active');

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
