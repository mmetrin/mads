import { useEffect } from 'react'

export function useScrollReveal(selector = '.scroll-reveal') {
  useEffect(() => {
    const scrollRevealItems = [...document.querySelectorAll(selector)]

    if (!('IntersectionObserver' in window)) {
      scrollRevealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    scrollRevealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [selector])
}
