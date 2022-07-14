document.addEventListener('DOMContentLoaded', () => {
  let tabsBtn = document.querySelectorAll('.tabs__btn')
  let tabsItem = document.querySelectorAll('.work__content')

  tabsBtn.forEach(element => {
    element.addEventListener('click', e => {
      const path = e.currentTarget.dataset.path

      tabsBtn.forEach((btn) => {
        btn.classList.remove('tabs__btn--active')
      })

      e.currentTarget.classList.add('tabs__btn--active')

      tabsItem.forEach(el => {
        el.classList.remove('work__content--active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active')
    })
  })
})
