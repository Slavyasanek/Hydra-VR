!function(){var e=document.querySelector(".header");e.offsetTop;window.addEventListener("scroll",(function(){Number.parseInt(window.pageYOffset)>=190?e.classList.add("header--background"):e.classList.remove("header--background")})),window.addEventListener("load",(function(){var e=document.querySelectorAll('[data-slider="slider-connect"]');e&&e.forEach((function(e){var s=e.querySelector(".swiper-button-prev"),t=e.querySelector(".swiper-button-next");new Swiper(e.querySelector(".swiper"),{speed:1500,loop:!0,loopFillGroupWithBlank:!0,slidesPerGroup:1,centeredSlides:!0,slidesPerView:2,spaceBetween:20,navigation:{nextEl:t,prevEl:s},on:{transitionStart:function(){var s=this.previousIndex,t=e.getElementsByClassName("swiper-slide")[s];t&&setTimeout((function(){t.classList.remove("is-play")}),1e3)},transitionEnd:function(){var s=this.activeIndex;e.getElementsByClassName("swiper-slide")[s].classList.add("is-play")}},breakpoints:{0:{slidesPerView:1,spaceBetween:25},1024:{slidesPerView:2,spaceBetween:40,centeredSlides:!1},1280:{slidesPerView:3,spaceBetween:40}}})}))}),!1)}();
//# sourceMappingURL=index.345aa40b.js.map
