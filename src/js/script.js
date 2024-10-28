import burger from './modules/burger.js'
import accordion from './modules/accordion.js'
import form from './modules/form.js'
import slider from './modules/slider.js'

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.header__nav-link', 'nav-open')

  accordion('.process__item-top', 'process__item-active')

  form('.contacts__form', '.contacts__form input', '.contacts__form textarea')

  form('.footer__form', '.footer__form input')

  slider(
    '.testimonials__items',
    '.testimonials__item',
    '.arrow-next',
    '.arrow-prev',
    '.testimonials__pagination svg'
  )
})
