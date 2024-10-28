export default function accordion(headersSelector, activeSelector) {
  const headers = document.querySelectorAll(headersSelector)

  headers.forEach(header => {
    header.addEventListener('click', handleHeaderClick)
  })

  function handleHeaderClick() {
    this.parentNode.classList.toggle(activeSelector)
  }
}
