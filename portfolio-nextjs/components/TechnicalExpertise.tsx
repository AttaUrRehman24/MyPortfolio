'use client'

import { FadeUp, Stagger, StaggerItem } from '@/components/ui/motion'

const areas = [
  { title: 'Frontend', items: ['React, Next.js, TypeScript', 'React Native, Tailwind', 'Component-driven SPAs', 'Conversion-aware UI'] },
  { title: 'Backend & APIs', items: ['Node.js, Express, NestJS', 'Python (Flask / Django)', 'REST, GraphQL, WebSockets', 'JWT / OAuth auth'] },
  { title: 'Databases', items: ['PostgreSQL, MongoDB', 'Redis, MySQL', 'DynamoDB, Elasticsearch', 'Indexing & query tuning'] },
  { title: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda, RDS)', 'Docker, Kubernetes', 'CI/CD, GitHub Actions', 'Monitoring & observability'] },
  { title: 'Architecture', items: ['Multi-tenant SaaS', 'Microservices & event-driven', 'Serverless', 'LLM-powered AI systems'] },
]

export default function TechnicalExpertise() {
  return (
    <section style={{ padding: 'clamp(72px,9vw,120px) 0', background: '#fff' }}>
      <div className="container">
        <div className="section-head-center">
          <FadeUp><span className="eyebrow">Technical Expertise</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title">What I deliver, end-to-end</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-lead" style={{ textAlign: 'center' }}>
              Full-stack depth across the entire delivery surface — front end to infrastructure.
            </p>
          </FadeUp>
        </div>

        <Stagger className="tech-grid" gap={0.07}>
          {areas.map((a) => (
            <StaggerItem key={a.title}>
              <div className="tech-card">
                <h3 className="tech-title">{a.title}</h3>
                <ul className="tech-list">
                  {a.items.map((it) => (
                    <li key={it}>
                      <span className="tech-dot" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
