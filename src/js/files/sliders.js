import Swiper from "swiper";
import { Navigation, Autoplay, Scrollbar, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function sliders() {
  const doctorsSlider = document.querySelector(".our-doctors__slider");

  if (doctorsSlider) {
    const swiper = new Swiper(doctorsSlider, {
      modules: [Navigation, Autoplay, Scrollbar],
      speed: 700,
      spaceBetween: 16,
      slidesPerView: "auto",
      grabCursor: true,
      navigation: {
        prevEl: ".our-doctors .slider-nav__btn--prev",
        nextEl: ".our-doctors .slider-nav__btn--next",
      },
      // autoplay: {
      //   delay: 4000,
      // },
      scrollbar: {
        el: ".our-doctors__scrollbar",
        draggable: true,
      },
      breakpoints: {
        1110: {
          slidesPerView: 4,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  }

  const portfolioSlider = document.querySelector(".portfolio__slider");

  if (portfolioSlider) {
    const portfolioInfoSlider = document.querySelector(".portfolio__info-slider");
    const buttonsPagination = document.querySelectorAll(".portfolio .pagination__btn");

    const slider = new Swiper(portfolioSlider, {
      modules: [Navigation, Scrollbar, Pagination, Autoplay],
      speed: 700,
      spaceBetween: 15,
      allowTouchMove: false,
      navigation: {
        prevEl: ".portfolio .slider-nav__btn--prev",
        nextEl: ".portfolio .slider-nav__btn--next",
      },
      scrollbar: {
        el: ".portfolio__scrollbar",
        draggable: true,
      },
    });

    const sldierInfo = new Swiper(portfolioInfoSlider, {
      modules: [Navigation, Scrollbar, Pagination, EffectFade, Autoplay],
      speed: 700,
      // allowTouchMove: false,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        prevEl: ".portfolio .slider-nav__btn--prev",
        nextEl: ".portfolio .slider-nav__btn--next",
      },
      pagination: {
        el: ".portfolio .pagination",
        clickable: true,
        type: "custom",
        bulletClass: "pagination__btn",
        bulletActiveClass: "active",
      },
      scrollbar: {
        el: ".portfolio__scrollbar",
        draggable: true,
      },
      // autoplay: {
      //   delay: 3000,
      // },
      on: {
        init: () => {
          const firstBtnPagination = document.querySelector(".portfolio__nav .pagination__btn");
          firstBtnPagination.classList.add("active");
        },
        slideChange: ({ activeIndex }) => {
          buttonsPagination.forEach((btn) => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active");
          slider.slideTo(activeIndex);
        },
      },
      breakpoints: {
        744: {
          autoplay: false,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const buttonsPagination = document.querySelectorAll(".reviews .pagination__btn");

    const slider = new Swiper(reviewsSlider, {
      modules: [Navigation, Scrollbar, Pagination, Autoplay, EffectFade],
      speed: 700,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        prevEl: ".reviews .slider-nav__btn--prev",
        nextEl: ".reviews .slider-nav__btn--next",
      },
      pagination: {
        el: ".reviews .pagination",
        clickable: true,
        type: "custom",
        bulletClass: "pagination__btn",
        bulletActiveClass: "active",
      },
      scrollbar: {
        el: ".reviews__scrollbar",
        draggable: true,
      },
      // autoplay: {
      //   delay: 3000,
      // },
      on: {
        init: () => {
          const firstBtnPagination = document.querySelector(".reviews__nav .pagination__btn");
          firstBtnPagination.classList.add("active");
        },
        slideChange: ({ activeIndex }) => {
          buttonsPagination.forEach((btn) => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active");
          slider.slideTo(activeIndex);
        },
      },
      breakpoints: {
        744: {
          autoplay: false,
        },
      },
    });
  }

  const certificatesSlider = document.querySelector(".certificates__slider");

  if (certificatesSlider) {
    const swiper = new Swiper(certificatesSlider, {
      modules: [Navigation, Autoplay, Scrollbar],
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        prevEl: ".certificates .slider-nav__btn--prev",
        nextEl: ".certificates .slider-nav__btn--next",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".certificates__scrollbar",
        draggable: true,
      },
      breakpoints: {
        744: {
          slidesPerView: 3,
        },
      },
    });
  }

  const discountSlider = document.querySelector(".discount__slider");

  if (discountSlider) {
    const swiper = new Swiper(discountSlider, {
      modules: [Navigation, Autoplay],
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        prevEl: ".discount .slider-nav__btn--prev",
        nextEl: ".discount .slider-nav__btn--next",
      },
      autoplay: {
        delay: 4000,
      },
    });

    if (window.matchMedia("(max-width: 576px)").matches) {
      swiper.destroy();
    }
  }

  const comfortSlider = document.querySelector(".comfort__slider");

  if (comfortSlider) {
    const swiper = new Swiper(comfortSlider, {
      modules: [Navigation, Autoplay, Scrollbar],
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        prevEl: ".comfort .slider-nav__btn--prev",
        nextEl: ".comfort .slider-nav__btn--next",
      },
      autoplay: {
        delay: 4000,
      },
      scrollbar: {
        el: ".comfort__scrollbar",
        draggable: true,
      },
      breakpoints: {
        744: {
          slidesPerView: 3,
        },
      },
    });
  }
}
