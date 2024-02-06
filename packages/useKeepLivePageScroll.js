import { ref, onActivated } from 'vue'
import useScrollFactory from './useScrollFactory.js'

export default (dom, animeStatus = false) => {
  const scrollTop = ref(0)
  const duration = 200

  dom.onscroll = () => {
    const result = useScrollFactory({ dom })
    scrollTop.value = result.scrollTop
  }
  onActivated(() => {
    const maxScrollTop = scrollTop.value
    const split = maxScrollTop / 10
    const anime = async () => {
      if (dom.scrollTop + 50 >= maxScrollTop) return
      dom.scrollTop = dom.scrollTop + split
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, duration / 10)
      })
      anime()
    }
    animeStatus ? anime() : dom.scrollTop = maxScrollTop
  })

  return scrollTop
}