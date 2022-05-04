const swiper = new Swiper('.swiper-container', {

  slidesPerView: 'auto',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1800: {
      slidesPerView: 1,
    }
  }

  // autoplay: {
  //   delay: 2000,
  // },

});
