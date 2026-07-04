'use client'

import { FadeUp, Stagger, StaggerItem } from '@/components/ui/motion'

const industries = [
  { name: 'Healthcare', note: 'HIPAA / POPIA' },
  { name: 'AI & LLM', note: 'Agents · voice · OCR' },
  { name: 'Telecom', note: '20M+ subscribers' },
  { name: 'Government', note: 'Omni-channel, millions of users' },
  { name: 'Fintech', note: 'Secure transactions' },
  { name: 'Education', note: 'Learning platforms' },
  { name: 'Recruiting & HR', note: 'Data pipelines' },
  { name: 'SaaS & Marketplaces', note: 'Multi-tenant scale' },
]

export default function Industries() {
  return (
    <section style={{ padding: 'clamp(72px,9vw,120px) 0', background: 'var(--light)' }}>
      <div className="container">
        <div className="section-head-center">
          <FadeUp><span className="eyebrow">Industries</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title">I don&apos;t learn your domain on your dime</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-lead" style={{ textAlign: 'center' }}>
              I&apos;ve already shipped in the hard, regulated, high-scale versions of these industries.
            </p>
          </FadeUp>
        </div>

        <Stagger className="ind-grid" gap={0.05}>
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <div className="ind-card">
                <h3 className="ind-name">{ind.name}</h3>
                <p className="ind-note">{ind.note}</p>
                <span className="ind-arrow">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
