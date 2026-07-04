'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import {
  SiDocker,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import OrbitingTechIcons, { type TechIcon } from '@/components/hero/OrbitingTechIcons'
import HeroLiquidCTA from '@/components/hero/HeroLiquidCTA'
import SplitText from '@/components/ui/SplitText'

/** 12 icons clockwise from top, 30° apart */
const TECH_STACK: TechIcon[] = [
  { name: 'React', Icon: SiReact, color: '#2563EB', angle: -90 },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#0F172A', angle: -60 },
  { name: 'TypeScript', Icon: SiTypescript, color: '#2563EB', angle: -30 },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', angle: 0 },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', angle: 30 },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', angle: 60 },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', angle: 90 },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D', angle: 120 },
  { name: 'Docker', Icon: SiDocker, color: '#2563EB', angle: 150 },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', angle: 180 },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098', angle: -150 },
  { name: 'Prisma', Icon: SiPrisma, color: '#2D3748', angle: -120 },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/AttaUrRehman24',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:iamatta24@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6L12 13 2 6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/atta-ur-rehman-software-engineer/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const FOUNDER_PAIN_POINTS = [
  'Brilliant idea, but no team to build it right?',
  'Ghosted mid-project or stuck with costly code?',
  'MVP works, until real users show up?',
]

const WORK_WITH_ME_POINTS = [
  'Custom platform for your critical workflows',
  'Secure, scalable system with no costly rebuild',
  'Real-time analytics for sharper decisions',
  'Clean product experience users actually enjoy',
  'One senior engineer owning it end-to-end',
  'A digital asset that elevates your brand',
]

const HERO_FLOATING_PROOFS = [
  { label: 'Available for', value: 'Senior / full-stack roles', position: 'hero-floating-proof--tl' },
  { label: 'Mindset', value: 'Founding engineer ownership', position: 'hero-floating-proof--ml' },
  { label: 'Specialty', value: 'AI / LLM + SaaS architecture', position: 'hero-floating-proof--tr' },
  { label: 'Working style', value: 'Direct 1:1 execution', position: 'hero-floating-proof--br' },
]

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#2563EB" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={['hero-social-row flex gap-2 pl-1', className].filter(Boolean).join(' ')}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={s.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all duration-250 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#2563EB] hover:to-[#38BDF8] hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })
  const [scrollRevealed, setScrollRevealed] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrollRevealed(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const iconsRevealed = isInView || scrollRevealed

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-home relative w-full min-w-0 overflow-visible bg-white px-4 pb-6 pt-28 sm:px-8 lg:px-12"
    >
      <div className="hero-floating-proofs" aria-hidden>
        {HERO_FLOATING_PROOFS.map((item) => (
          <div key={item.label} className={`hero-floating-proof ${item.position}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="hero-shell mx-auto flex min-h-0 w-full max-w-[1298px] flex-col justify-center">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:gap-y-3 xl:gap-x-10">
          <h1 className="hero-headline display order-1 col-span-1 mb-1 text-center font-display text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl md:text-3xl lg:order-none lg:col-span-12 lg:mb-0 lg:whitespace-nowrap lg:text-[clamp(1.75rem,3.1vw,3rem)] relative z-30">
            <SplitText
              tag="span"
              text="I'm Atta Ur Rehman, Senior Full Stack Engineer"
              className="font-display font-extrabold tracking-tight"
              splitType="words"
              delay={70}
              duration={0.65}
              ease="power3.out"
              from={{ opacity: 0, y: 32 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.01}
              rootMargin="0px"
              textAlign="center"
            />
          </h1>

          {/* LEFT — 25% */}
          <aside className="hero-in-3 order-2 hidden flex-col gap-3 lg:order-none lg:col-span-3 lg:flex">
            <SocialLinks />

            <div className="hero-side-card">
              <span className="hero-side-eyebrow">For founders</span>
              <h2 className="hero-side-title">Are you a founder, and...</h2>
              <div className="hero-mini-list">
                {FOUNDER_PAIN_POINTS.map((point, index) => (
                  <div key={point} className="hero-mini-item">
                    <span className="hero-mini-num">{String(index + 1).padStart(2, '0')}</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <p className="hero-side-note">
                I turn rough ideas, broken builds, and stalled MVPs into production-ready software.
              </p>
            </div>
          </aside>

          {/* CENTER — 50% */}
          <div className="order-2 flex flex-col items-center overflow-visible lg:order-none lg:col-span-6">
            {/* Portrait + orbit */}
            <div className="relative mx-auto w-full max-w-[620px] overflow-visible px-4 sm:px-8">
              <div
                ref={portraitRef}
                className="relative mx-auto flex h-[380px] w-full max-w-[520px] items-end justify-center overflow-visible sm:h-[420px] lg:h-[480px]"
              >
                {/* Animated blob backdrop */}
                <div
                  className="hero-blob pointer-events-none absolute bottom-[4%] left-1/2 z-0 h-[88%] w-[92%] -translate-x-1/2 bg-gradient-to-b from-[#DBEAFE] via-[#B5D4F4] to-[#93C5FD] opacity-90"
                  aria-hidden
                />

                <OrbitingTechIcons items={TECH_STACK} revealed={iconsRevealed} variant="orbit" />

                <img
                  src="/images/unnamed-removebg-preview.png"
                  alt="Atta Ur Rehman, Senior Full Stack Engineer"
                  className="relative z-10 h-[92%] w-auto max-w-[450px] translate-x-2 -translate-y-12 object-contain object-bottom drop-shadow-[0_24px_40px_rgba(15,23,42,0.2)] sm:translate-x-3 sm:-translate-y-14 lg:translate-x-4 lg:-translate-y-16"
                />

                {/* CTA overlay at bottom of portrait */}
                <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2">
                  <HeroLiquidCTA />
                </div>
              </div>

              <OrbitingTechIcons items={TECH_STACK} revealed={iconsRevealed} variant="mobile" />
            </div>
          </div>

          {/* RIGHT — 25% */}
          <aside className="hero-in-3 order-3 hidden flex-col gap-3 lg:col-span-3 lg:flex">
            <div className="hero-side-card hero-side-card--right">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="hero-side-eyebrow">What I offer</span>
                  <h2 className="hero-side-title">Work with me and you&apos;ll have...</h2>
                </div>
                <StarRow />
              </div>

              <div className="hero-offer-list hero-wide-list">
                {WORK_WITH_ME_POINTS.map((point) => (
                  <div key={point} className="hero-offer-item">
                    <span aria-hidden>
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.2 6.6 11.3 12.8 4.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <div className="hero-proof-grid">
                <div>
                  <strong>10+</strong>
                  <span>Years</span>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>300+</strong>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile: quote + stats */}
        <div className="mt-8 flex flex-col gap-6 lg:hidden">
          <SocialLinks className="justify-center pl-0" />

          <div className="hero-side-card">
            <span className="hero-side-eyebrow">For founders</span>
            <h2 className="hero-side-title">Is your build stuck?</h2>
            <div className="hero-mini-list">
              {FOUNDER_PAIN_POINTS.slice(0, 2).map((point, index) => (
                <div key={point} className="hero-mini-item">
                  <span className="hero-mini-num">{String(index + 1).padStart(2, '0')}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-side-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="hero-side-eyebrow">What I offer</span>
                <h2 className="hero-side-title">Architecture plus execution.</h2>
              </div>
              <StarRow />
            </div>
            <div className="hero-offer-list mt-4">
              {WORK_WITH_ME_POINTS.slice(0, 3).map((point) => (
                <div key={point} className="hero-offer-item">
                  <span aria-hidden>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8.2 6.6 11.3 12.8 4.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <div className="hero-proof-grid mt-4">
              <div>
                <strong>10+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
