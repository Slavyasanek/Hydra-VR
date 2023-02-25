const sliderCreate = () => {
  const sliderContacts = document.querySelector('[data-slider="slider-connect"]')

  if (window.matchMedia('(min-width: 1440px)').matches) {
    document.querySelector('.connect__slider').classList.remove('swiper-wrapper');
    sliderContacts.removeAttribute('data-slider');
  } else {
    sliderConnect = new Swiper('[data-slider="slider-connect"]', {
      speed: 1500,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    });
  }
}

window.addEventListener('resize', sliderCreate);
window.addEventListener('load', sliderCreate);