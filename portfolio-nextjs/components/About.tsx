'use client'

import SiteGlassButton from '@/components/ui/site-glass-button'
import { FadeUp, SlideIn, Stagger, StaggerItem } from '@/components/ui/motion'

const highlights = [
  'SaaS & multi-tenant platforms',
  'AI-powered & LLM features',
  'Healthcare & HIPAA-compliant systems',
  'Government & high-scale telecom',
  'Founding-engineer ownership',
  'Production AWS + CI/CD delivery',
]

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(72px,9vw,120px) 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <SlideIn dir="left">
          <div className="about-visual">
            <div className="about-portrait-bg" />
            <img src="/images/unnamed-removebg-preview.png" alt="Atta Ur Rehman" className="about-img" />
            <div className="about-float-card">
              <span className="about-float-num">10+</span>
              <span className="about-float-label">Years shipping production SaaS</span>
            </div>
          </div>
        </SlideIn>

        <div>
          <FadeUp>
            <span className="eyebrow">About Me</span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title" style={{ marginTop: 14 }}>
              Senior engineer who <span style={{ color: 'var(--primary)' }}>owns the build</span> end-to-end
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-lead" style={{ marginTop: 18 }}>
              I&apos;m Atta Ur Rehman — a Senior Full Stack Engineer with 10+ years building scalable SaaS, AI-powered systems,
              healthcare platforms, government systems, telecom solutions, and enterprise software. I architect, build, and ship
              production-grade products on Node.js, TypeScript, NestJS and React — then harden them to production on AWS with Docker.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="section-lead" style={{ marginTop: 14, color: 'var(--text-light)' }}>
              I prototype fast, work directly with users, and make calls with incomplete information — the way a founding engineer does.
              Not a $15/hr freelancer. Not a slow agency.
            </p>
          </FadeUp>

          <Stagger className="about-highlights" gap={0.06}>
            {highlights.map((h) => (
              <StaggerItem key={h}>
                <div className="about-highlight">
                  <span className="about-check">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {h}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.2}>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <SiteGlassButton as="a" href="/case-studies">View Case Studies</SiteGlassButton>
              <SiteGlassButton as="a" href="#contact" variant="ghost" icon={<span />}>Get In Touch</SiteGlassButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
