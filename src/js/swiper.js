const sliderCreate = () => {
  const sliders = document.querySelectorAll('[data-slider]')
  const swipers = document.querySelectorAll('.swiper');

  if (window.matchMedia('(min-width: 1440px)').matches && swipers) {
    swipers.forEach(swiper => {
      swiper.firstElementChild.classList.add('disabled');
      swiper.classList.remove('swiper')
    });
  } else {
    sliders.forEach(slider => slider.classList.add('swiper'));
    swipers.forEach(swiper => {
      if (swiper.firstElementChild.classList.contains('disabled')) {
        swiper.firstElementChild.classList.remove('disabled');
      }
    })
    const sliderContacts = new Swiper('[data-slider="slider-connect"]', {
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
        0: {
          slidesPerView: 1,
        },
        1440: {
          slidesPerView: 3,
        }
      }
    });
    const sliderServices = new Swiper('[data-slider="slider-services"]', {
      speed: 1500,
      loop: false,
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
        },
        1440: {
          slidesPerView: 4,
        }
      },
    });
    const sliderTech = new Swiper('[data-slider="slider-tech"]', {
      speed: 2000,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 0,
      autoplay: {
        delay: 2000,
        // disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 0,
        }
      },
    });
  }
}

window.addEventListener('resize', sliderCreate);
window.addEventListener('load', sliderCreate);
