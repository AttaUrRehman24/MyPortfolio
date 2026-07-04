'use client'

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" aria-hidden>
    <path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HeroLiquidCTA() {
  return (
    <div className="hero-dual-cta">
      <a href="#portfolio" className="hero-dual-btn hero-dual-btn--portfolio">
        Portfolio
        <ArrowIcon />
      </a>
      <a href="#contact" className="hero-dual-btn hero-dual-btn--hire">
        Hire me
      </a>
    </div>
  )
}
