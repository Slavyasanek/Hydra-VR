const sliderConnect = new Swiper('[data-slider="slider-connect"]', {
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