'use client'

import { Counter, FadeUp, Stagger, StaggerItem } from '@/components/ui/motion'

export default function Stats() {
  return (
    <section className="rounded-section stats-band" style={{ margin: '8px 20px' }}>
      <div className="stats-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(56px,7vw,84px)', paddingBottom: 'clamp(56px,7vw,84px)' }}>
        <div className="section-head-center" style={{ marginBottom: 48 }}>
          <FadeUp><span className="eyebrow eyebrow--light">Track Record</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title section-title--light">The numbers behind the work</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-lead" style={{ textAlign: 'center', color: 'rgba(255,255,255,.7)' }}>
              Not theory. The hard, regulated, high-scale version already shipped to production.
            </p>
          </FadeUp>
        </div>

        <Stagger className="stats-grid" gap={0.08}>
          <StaggerItem>
            <div className="stat-card">
              <Counter to={10} suffix="+" className="stat-num" />
              <p className="stat-label">Years architecting &amp; shipping production SaaS</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="stat-card">
              <Counter to={20} suffix="M+" className="stat-num" />
              <p className="stat-label">Telecom users reached at scale</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="stat-card">
              <Counter to={50} className="stat-num" />
              <p className="stat-label">US states, pharmacy platform licensed</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="stat-card">
              <span className="stat-num">Millions</span>
              <p className="stat-label">of records processed in production pipelines</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="stat-card stat-card--highlight">
              <span className="stat-num">Founding</span>
              <p className="stat-label">engineer track record: architecture, product &amp; code</p>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
