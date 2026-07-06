'use client'

import { FadeUp, Stagger, StaggerItem } from '@/components/ui/motion'

const steps = [
  { n: '01', title: 'Discovery & Architecture', desc: 'Map goals, users and constraints, then design the system: stack, data models, API design, infra and security.' },
  { n: '02', title: 'UX & Technical Design', desc: 'Clean, conversion-aware UI built component-first, plus schemas, endpoints and auth flows so the build is fast and predictable.' },
  { n: '03', title: 'Build', desc: 'Production code in iterations: React/Next.js front ends, Node.js or Python APIs, Postgres/Mongo/Redis, real-time and AI/LLM features.' },
  { n: '04', title: 'Testing, QA & Security', desc: 'Edge-case handling, OWASP hardening, JWT/OAuth, performance and query tuning. Problems caught before your users find them.' },
  { n: '05', title: 'Deploy & CI/CD', desc: 'Dockerized, on AWS or Vercel, with GitHub Actions pipelines so every future change ships safely and automatically.' },
  { n: '06', title: 'Scale & Maintain', desc: 'Caching, indexing, monitoring and ongoing support so the product holds up as you grow.' },
]

export default function Process() {
  return (
    <section className="rounded-section process-band" style={{ margin: '8px 20px' }}>
      <div className="process-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(64px,8vw,100px)', paddingBottom: 'clamp(64px,8vw,100px)' }}>
        <div className="section-head-center" style={{ marginBottom: 52 }}>
          <FadeUp><span className="eyebrow eyebrow--light">How I Build</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title section-title--light">From idea to production in 6 steps</h2>
          </FadeUp>
        </div>

        <Stagger className="process-grid" gap={0.07}>
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="process-card">
                <span className="process-num">{s.n}</span>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
