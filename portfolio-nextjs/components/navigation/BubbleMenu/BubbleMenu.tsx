'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './BubbleMenu.css'

export interface BubbleMenuItem {
  label: string
  href: string
  ariaLabel?: string
  rotation?: number
  hoverStyles?: { bgColor?: string; textColor?: string }
}

export interface BubbleMenuProps {
  logo?: React.ReactNode
  onMenuClick?: (open: boolean) => void
  className?: string
  style?: React.CSSProperties
  menuAriaLabel?: string
  menuBg?: string
  menuContentColor?: string
  useFixedPosition?: boolean
  items?: BubbleMenuItem[]
  animationEase?: string
  animationDuration?: number
  staggerDelay?: number
  cta?: React.ReactNode
}

const DEFAULT_ITEMS: BubbleMenuItem[] = [
  { label: 'home', href: '#home', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#2563EB', textColor: '#ffffff' } },
  { label: 'about', href: '#about', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#3B82F6', textColor: '#ffffff' } },
  { label: 'projects', href: '#portfolio', ariaLabel: 'Projects', rotation: 8, hoverStyles: { bgColor: '#60A5FA', textColor: '#ffffff' } },
  { label: 'blog', href: '#blog', ariaLabel: 'Blog', rotation: 8, hoverStyles: { bgColor: '#1D4ED8', textColor: '#ffffff' } },
  { label: 'contact', href: '#contact', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#2563EB', textColor: '#ffffff' } },
]

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#0F172A',
  useFixedPosition = true,
  items,
  cta,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const bubblesRef = useRef<Array<HTMLAnchorElement | null>>([])
  const labelRefs = useRef<Array<HTMLSpanElement | null>>([])

  const menuItems = items?.length ? items : DEFAULT_ITEMS
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', isMenuOpen ? 'menu-open' : '', className]
    .filter(Boolean)
    .join(' ')

  const handleToggle = () => {
    const nextState = !isMenuOpen
    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
    onMenuClick?.(nextState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    onMenuClick?.(false)
  }

  /* Lock body scroll while the drawer is open */
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const overlay = overlayRef.current
    const panel = panelRef.current
    const backdrop = backdropRef.current
    const bubbles = bubblesRef.current.filter(Boolean) as HTMLElement[]
    if (!overlay || !panel) return

    if (isMenuOpen) {
      gsap.killTweensOf([panel, backdrop, ...bubbles])
      gsap.set(overlay, { display: 'block' })
      gsap.set(backdrop, { autoAlpha: 0 })
      gsap.set(panel, { xPercent: 100 })
      gsap.set(bubbles, { autoAlpha: 0, x: 26 })

      gsap.to(backdrop, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
      gsap.to(panel, { xPercent: 0, duration: 0.55, ease: 'power4.out' })
      gsap.to(bubbles, {
        autoAlpha: 1,
        x: 0,
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.055,
        delay: 0.14,
      })
    } else if (showOverlay) {
      gsap.killTweensOf([panel, backdrop, ...bubbles])
      gsap.to(bubbles, { autoAlpha: 0, x: 26, duration: 0.2, ease: 'power2.in' })
      gsap.to(backdrop, { autoAlpha: 0, duration: 0.3, ease: 'power2.in', delay: 0.06 })
      gsap.to(panel, {
        xPercent: 100,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' })
          setShowOverlay(false)
        },
      })
    }
  }, [isMenuOpen, showOverlay])

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Mobile navigation">
        <div className="bubble logo-bubble" aria-label="Logo">
          <span className="logo-content">{logo}</span>
        </div>

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
        >
          <span className="menu-line" />
          <span className="menu-line short" />
        </button>
      </nav>

      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
          aria-hidden={!isMenuOpen}
        >
          <div ref={backdropRef} className="drawer-backdrop" onClick={closeMenu} aria-hidden />

          <aside
            ref={panelRef}
            className="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{ '--drawer-bg': menuBg } as React.CSSProperties}
          >
            <div className="drawer-head">
              <span className="drawer-brand">{logo}</span>
            </div>

            <span className="drawer-eyebrow">Navigation</span>

            <ul className="pill-list" role="menu" aria-label="Menu links">
              {menuItems.map((item, idx) => (
                <li key={idx} role="none" className="pill-col">
                  <a
                    role="menuitem"
                    href={item.href}
                    aria-label={item.ariaLabel || item.label}
                    className="pill-link"
                    onClick={closeMenu}
                    ref={(el) => { if (el) bubblesRef.current[idx] = el }}
                  >
                    <span className="pill-index">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="pill-label" ref={(el) => { if (el) labelRefs.current[idx] = el }}>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {cta ? (
              <div className="bubble-menu-cta" onClick={closeMenu}>
                {cta}
              </div>
            ) : null}
          </aside>
        </div>
      )}
    </>
  )
}
