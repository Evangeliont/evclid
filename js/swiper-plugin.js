const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 'auto',
  loop: false,

  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },

  breakpoints: {
    1800: {
      slidesPerView: 1,
    }
  }
})
