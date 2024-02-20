import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
      
const swiper__principal = new Swiper('.slide-content', {
    spaceBetween: 80,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    }
});

const swiper__destaque = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
});