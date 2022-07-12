document.addEventListener('click', () => {
  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.header__nav')
  let menuLinks = document.querySelector('header__link')

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    menu.classList.toggle('header__nav--active')
    document.body.classList.toggle('off-scroll')
  })

  menuLinks.forEach((el) => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active')
      menu.classList.remove('header__nav--active')
      document.body.classList.remove('off-scroll')
    })
  })
})
