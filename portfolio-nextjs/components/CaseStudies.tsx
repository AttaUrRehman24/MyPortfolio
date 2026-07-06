'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { FadeUp } from '@/components/ui/motion'
import SiteGlassButton from '@/components/ui/site-glass-button'

const ease = [0.22, 1, 0.36, 1] as const

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.28 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
}

function DiamondIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
      <path d="M5 0L10 5L5 10L0 5Z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CaseStudies() {
  return (
    <main className="csp-page">

      {/* ── Sticky top bar ── */}
      <header className="csp-topbar">
        <Link href="/" className="csp-back">
          <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
            <path d="M11 1L3 9l8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
        <span className="csp-brand">Atta Ur Rehman · Case Studies</span>
        <SiteGlassButton as="a" href="/#contact" size="sm">Hire Me</SiteGlassButton>
      </header>

      {/* ── Hero ── */}
      <section className="csp-hero">
        <div className="csp-hero-bg" aria-hidden>
          <div className="csp-hero-grid" />
          <div className="csp-hero-orb csp-hero-orb--1" />
          <div className="csp-hero-orb csp-hero-orb--2" />
          <div className="csp-hero-orb csp-hero-orb--3" />
        </div>

        <div className="container csp-hero-content">
          <FadeUp>
            <div className="csp-hero-badge">
              <span className="csp-hero-badge__dot" />
              9 Production Platforms
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <h1 className="csp-hero-title">
              The hard, regulated,{' '}
              <span className="csp-hero-title--accent">high-scale</span>
              <br />version, already shipped
            </h1>
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="csp-hero-lead">
              Healthcare, AI, government, telecom and fintech. Each one a real build
              with real outcomes, not theory.
            </p>
          </FadeUp>

          <FadeUp delay={0.17}>
            <div className="csp-hero-stats">
              {[
                { v: '9',    l: 'Case Studies' },
                { v: '10+',  l: 'Years Experience' },
                { v: '20M+', l: 'Users Reached' },
                { v: '98%',  l: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.l} className="csp-hero-stat">
                  <span className="csp-hero-stat__v">{s.v}</span>
                  <span className="csp-hero-stat__l">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="csp-studies">
        <div className="container csp-studies-wrap">
          {projects.map((p, i) => {
            const rev = i % 2 === 1

            return (
              <motion.article
                key={p.slug}
                id={p.slug}
                className={`csp-card${rev ? ' csp-card--rev' : ''}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                style={{ scrollMarginTop: 90 }}
              >
                {/* Large background index number */}
                <motion.span
                  className="csp-card-num"
                  variants={itemVariants}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>

                <div className={`csp-inner${rev ? ' csp-inner--rev' : ''}`}>

                  {/* ── Visual / image panel ── */}
                  <div className="csp-visual">
                    {p.img ? (
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="csp-visual__img"
                        sizes="(max-width: 860px) 100vw, 46vw"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        priority={i === 0}
                      />
                    ) : (
                      <>
                        <div className="csp-visual__grad" style={{ background: p.gradient }} />
                        <div className="csp-visual__grid-lines" />
                        <span className="csp-visual__initials">{p.initials}</span>
                      </>
                    )}

                    {/* Persistent bottom fade + overlays */}
                    <div className="csp-visual__fade" aria-hidden />
                    <span className="csp-cat-badge">{p.category}</span>
                    <div className="csp-metric-pill">{p.metric}</div>

                    {/* Hover-reveal CTA */}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="csp-visit-btn"
                        aria-label={`Visit ${p.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Live Site
                        <ArrowIcon />
                      </a>
                    )}
                  </div>

                  {/* ── Content panel ── */}
                  <motion.div className="csp-content" variants={contentVariants}>

                    <motion.div className="csp-head" variants={itemVariants}>
                      <h2 className="csp-name">{p.name}</h2>
                      <p className="csp-tagline">{p.tagline}</p>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="csp-url">
                          {p.url.replace(/^https?:\/\//, '')}
                          <ArrowIcon />
                        </a>
                      )}
                    </motion.div>

                    <motion.div className="csp-divider" variants={itemVariants} aria-hidden />

                    <motion.div className="csp-block" variants={itemVariants}>
                      <h3 className="csp-block-label"><DiamondIcon /> Challenge</h3>
                      <p className="csp-block-text">{p.challenge}</p>
                    </motion.div>

                    <motion.div className="csp-block" variants={itemVariants}>
                      <h3 className="csp-block-label"><DiamondIcon /> What I Built</h3>
                      <p className="csp-block-text">{p.built}</p>
                    </motion.div>

                    <motion.div className="csp-block" variants={itemVariants}>
                      <h3 className="csp-block-label"><DiamondIcon /> Results</h3>
                      <p className="csp-block-text">{p.result}</p>
                    </motion.div>

                    <motion.div className="csp-tags" variants={itemVariants}>
                      {p.tags.map((t) => (
                        <span key={t} className="csp-tag">{t}</span>
                      ))}
                    </motion.div>

                  </motion.div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="csp-cta">
        <div className="csp-cta-bg" aria-hidden>
          <div className="csp-cta-grid" />
          <div className="csp-cta-orb csp-cta-orb--1" />
          <div className="csp-cta-orb csp-cta-orb--2" />
        </div>
        <div className="container csp-cta-body">
          <FadeUp>
            <div className="csp-cta-eyebrow">Free Technical Audit</div>
          </FadeUp>
          <FadeUp delay={0.07}>
            <h2 className="csp-cta-title">Your build could be next</h2>
          </FadeUp>
          <FadeUp delay={0.13}>
            <p className="csp-cta-lead">
              Send me your idea, repo, or current build for a free Technical &amp; Architecture Audit.
            </p>
          </FadeUp>
          <FadeUp delay={0.19}>
            <div className="csp-cta-btns">
              <SiteGlassButton as="a" href="/#contact" size="lg">Get my free audit</SiteGlassButton>
              <SiteGlassButton as="a" href="/" variant="outline" size="lg" icon={<span />}>Back to home</SiteGlassButton>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
