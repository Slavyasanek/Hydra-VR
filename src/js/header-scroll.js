const header = document.querySelector('.header');

const headerToTop = header.offsetTop;
const makeHeader = () => {
    if (Number.parseInt(window.pageYOffset) >= 190 ) {
        header.classList.add("header--background");
    } else {
        header.classList.remove("header--background");
    }
}

window.addEventListener("scroll", makeHeader);