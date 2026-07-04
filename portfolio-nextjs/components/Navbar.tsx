'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import BubbleMenu, { type BubbleMenuItem } from '@/components/navigation/BubbleMenu/BubbleMenu'

const navLinks = [
  { id: 'home',      label: 'Home',    href: '#home' },
  { id: 'about',     label: 'About',   href: '#about' },
  { id: 'services',  label: 'Service', href: '#services' },
  { id: 'experience',label: 'Resume',  href: '#experience' },
  { id: 'portfolio', label: 'Project', href: '#portfolio' },
  { id: 'contact',   label: 'Contact', href: '#contact' },
]

const bubbleItems: BubbleMenuItem[] = [
  { label: 'home',    href: '#home',       rotation: -8, hoverStyles: { bgColor: '#2563EB', textColor: '#fff' } },
  { label: 'about',   href: '#about',      rotation:  8, hoverStyles: { bgColor: '#38BDF8', textColor: '#fff' } },
  { label: 'service', href: '#services',   rotation: -6, hoverStyles: { bgColor: '#38BDF8', textColor: '#fff' } },
  { label: 'resume',  href: '#experience', rotation:  8, hoverStyles: { bgColor: '#1D4ED8', textColor: '#fff' } },
  { label: 'project', href: '#portfolio',  rotation:  8, hoverStyles: { bgColor: '#2563EB', textColor: '#fff' } },
  { label: 'contact', href: '#contact',    rotation: -8, hoverStyles: { bgColor: '#38BDF8', textColor: '#fff' } },
]

function Logo() {
  return (
    <a href="#home" className="nav-chroma__logo">
      <span className="nav-chroma__logo-badge">AR</span>
      <span className="nav-chroma__logo-text">Atta</span>
    </a>
  )
}

export default function Navbar() {
  const [active, setActive]         = useState('home')
  const [cx, setCx]                 = useState(50)
  const [cy, setCy]                 = useState(50)
  const [spotlit, setSpotlit]       = useState(false)
  const [pill, setPill]             = useState({ left: 0, width: 0 })
  const [pillReady, setPillReady]   = useState(false)

  const navRef      = useRef<HTMLElement>(null)
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const listRef     = useRef<HTMLUListElement>(null)
  const itemRefs    = useRef<Record<string, HTMLLIElement | null>>({})
  /* Tracks real-time active section without stale-closure issues */
  const activeRef   = useRef('home')

  /* ── Recalculate pill position ── */
  const updatePill = useCallback((id: string) => {
    const li     = itemRefs.current[id]
    const list   = listRef.current
    if (!li || !list) return

    const liRect   = li.getBoundingClientRect()
    const listRect = list.getBoundingClientRect()

    setPill({ left: liRect.left - listRect.left, width: liRect.width })
    setPillReady(true)
  }, [])

  /* ── Scroll spy + shadow ── */
  useEffect(() => {
    const onScroll = () => {
      const nav = navRef.current
      if (nav) {
        nav.style.boxShadow = window.scrollY > 30
          ? '0 8px 32px rgba(0,0,0,.45)'
          : 'none'
      }

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const el = sec as HTMLElement
        /* getBoundingClientRect().top + scrollY is more reliable than offsetTop
           when any ancestor has a CSS transform or position applied */
        const top = el.getBoundingClientRect().top + window.pageYOffset
        if (window.pageYOffset >= top - 120) current = el.id
      })

      if (current && current !== activeRef.current) {
        activeRef.current = current
        setActive(current)
        updatePill(current)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [updatePill])

  /* ── Initial pill position (after fonts/layout settle) ── */
  useEffect(() => {
    const t = setTimeout(() => updatePill(active), 120)
    return () => clearTimeout(t)
  }, [active, updatePill])

  /* ── Pill on resize ── */
  useEffect(() => {
    const onResize = () => updatePill(activeRef.current)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [updatePill])

  /* ── Cursor spotlight ── */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = navRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width)  * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    setCx(Math.round(x))
    setCy(Math.round(y))
  }, [])

  const handleMouseEnter = useCallback(() => setSpotlit(true),  [])
  const handleMouseLeave = useCallback(() => setSpotlit(false), [])

  return (
    <>
      <header id="navbar" className="nav-desktop">
        <nav
          ref={navRef}
          id="nav"
          className="nav-chroma"
          style={{ '--cx': `${cx}%`, '--cy': `${cy}%` } as React.CSSProperties}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-spotlit={spotlit ? '' : undefined}
        >
          <Logo />

          {/* ── Link strip with sliding pill ── */}
          <div ref={wrapperRef} className="nav-chroma__links-wrap">
            <ul ref={listRef} className="nav-chroma__list">
              {/* Sliding pill lives inside the list for correct relative positioning */}
              <li aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div
                  className="nav-chroma__pill"
                  style={{
                    left:    pill.left,
                    width:   pill.width,
                    opacity: pillReady ? 1 : 0,
                  }}
                />
              </li>

              {navLinks.map(({ id, label, href }) => (
                <li
                  key={id}
                  ref={(el) => { itemRefs.current[id] = el }}
                >
                  <a
                    href={href}
                    className={`nav-chroma__link${active === id ? ' nav-chroma__link--active' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA ── */}
          <a href="#contact" className="nav-chroma__cta">
            Hire Me
            <svg width="11" height="11" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </header>

      <div className="nav-mobile">
        <BubbleMenu
          logo={<Logo />}
          items={bubbleItems}
          menuBg="#0F172A"
          menuContentColor="#FFFFFF"
          useFixedPosition
          cta={
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-[8px] bg-gradient-to-br from-[#2563EB] to-[#38BDF8] px-4 py-3 font-body text-sm font-semibold text-white no-underline"
            >
              Hire Me
            </a>
          }
        />
      </div>
    </>
  )
}
