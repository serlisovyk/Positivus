export default function slider(
  wrapperSelector,
  slidesSelector,
  nextBtnSelector,
  prevBtnSelector,
  dotsSelector
) {
  const itemsContainer = document.querySelector(wrapperSelector)
  const items = document.querySelectorAll(slidesSelector)
  const paginationDots = document.querySelectorAll(dotsSelector)

  const nextBtn = document.querySelector(nextBtnSelector)
  const prevBtn = document.querySelector(prevBtnSelector)

  let currentIndex = 0

  function showSlide(index) {
    const itemWidth = items[0].offsetWidth + 50
    itemsContainer.style.transform = `translateX(-${index * itemWidth}px)`

    paginationDots.forEach(dot =>
      dot.classList.remove('testimonials__pagination-active')
    )
    paginationDots[index].classList.add('testimonials__pagination-active')
  }

  nextBtn.addEventListener('click', () => {
    currentIndex < items.length - 1 ? currentIndex++ : (currentIndex = 0)

    showSlide(currentIndex)
  })

  prevBtn.addEventListener('click', () => {
    currentIndex > 0 ? currentIndex-- : (currentIndex = items.length - 1)

    showSlide(currentIndex)
  })

  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index

      showSlide(currentIndex)
    })
  })
}
