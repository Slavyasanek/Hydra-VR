const sliderCreate = () => {
  let sliderContacts = document.querySelector('[data-slider="slider-connect"]');
  let sliderServices = document.querySelector('[data-slider="slider-services"]');
  let sliderTech = document.querySelector('[data-slider="slider-tech"]');

  if (window.matchMedia('(min-width: 1440px)').matches) {
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach(swiper => swiper.classList.remove('swiper'));

    const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
    swiperWrappers.forEach(swiperWrapper => swiperWrapper.classList.remove('swiper-wrapper'));
    
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));

    sliderContacts.removeAttribute('data-slider');
    sliderServices.removeAttribute('data-slider');
    sliderTech.removeAttribute('data-slider');

  } else {
    sliderContacts = new Swiper('[data-slider="slider-connect"]', {
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
    sliderServices = new Swiper('[data-slider="slider-services"]', {
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
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      },
    });
    sliderTech = new Swiper('[data-slider="slider-services"]', {
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
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      },
    });
  }
}

window.addEventListener('resize', sliderCreate);
window.addEventListener('load', sliderCreate);