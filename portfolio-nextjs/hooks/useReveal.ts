'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    revealEls.forEach((el) => el.classList.add('reveal-pending'))

    const markVisible = (el: Element) => {
      el.classList.add('visible')
      el.classList.remove('reveal-pending')
    }

    const revealInView = () => {
      const vpH = window.innerHeight || document.documentElement.clientHeight
      const vpW = window.innerWidth || document.documentElement.clientWidth
      revealEls.forEach((el) => {
        if (el.classList.contains('visible')) return
        const r = el.getBoundingClientRect()
        if (r.top < vpH + 80 && r.bottom > -80 && r.left < vpW && r.right > 0) {
          markVisible(el)
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 80px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
    revealInView()

    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView, { passive: true })
    const fallback = setTimeout(() => revealEls.forEach(markVisible), 400)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
      clearTimeout(fallback)
    }
  }, [])
}
