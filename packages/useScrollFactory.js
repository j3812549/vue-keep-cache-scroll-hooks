let time = null
export const debounce = (fnc, delay = 500) => {
  if (time) clearTimeout(time)
  time = setTimeout(() => {
    fnc()
  }, delay)
}

export default options => {
  const {
    dom,
    topMargin = 50,
    bottomMargin = 50,
    topFnc,
    bottomFnc
  } = options
  const { scrollTop, scrollHeight, clientHeight } = dom

  const maxScroll = scrollHeight - clientHeight

  if (scrollTop < topMargin) {
    if (topFnc) debounce(topFnc)
  }
  if (scrollTop > maxScroll - bottomMargin) {
    if (bottomFnc) debounce(bottomFnc)
  }
  return {
    scrollTop,
    maxScroll
  }
}
