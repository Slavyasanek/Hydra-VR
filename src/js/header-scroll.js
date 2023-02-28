const header = document.querySelector('.header');

export const headerHeight = header.offsetHeight;
const makeHeader = () => {
    if (Number.parseInt(window.pageYOffset) >= headerHeight) {
        header.classList.add("header--background");
    } else {
        header.classList.remove("header--background");
    }
}

window.addEventListener("scroll", makeHeader);