import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
      
const swiper = new Swiper('.slide-content', {
    spaceBetween: 80,

    pagination: {
        el: '.swiper-pagination',
    }
});