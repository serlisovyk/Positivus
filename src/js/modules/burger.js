export default function burger(
  burgerSelector,
  navLinksSelector,
  navOpenSelector
) {
  document.addEventListener('click', burgerClick)

  function burgerClick(e) {
    if (e.target.closest(burgerSelector)) {
      document.documentElement.classList.toggle(navOpenSelector)
    }
  }

  const navLinks = document.querySelectorAll(navLinksSelector)

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.documentElement.classList.remove(navOpenSelector)
    })
  })
}
