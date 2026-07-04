'use client'

import { FadeUp, Stagger, StaggerItem } from '@/components/ui/motion'

const groups: { title: string; icon: React.ReactNode; skills: string[] }[] = [
  {
    title: 'Frontend',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'React Native', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" /><circle cx="7" cy="7" r="1" fill="currentColor" /><circle cx="7" cy="17" r="1" fill="currentColor" /></svg>
    ),
    skills: ['Node.js', 'NestJS', 'Express.js', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'AI & LLM',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    skills: ['AI Agents', 'Conversational AI', 'OCR Pipelines', 'Prompt Engineering', 'Voice Assistants'],
  },
  {
    title: 'Databases',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" strokeWidth="2" /></svg>
    ),
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch'],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 18a4 4 0 1 1 .5-7.97A6 6 0 0 1 19 11a3.5 3.5 0 0 1-1 6.9H7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
    ),
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Languages',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 6l-5 6 5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: 'clamp(72px,9vw,120px) 0', background: 'var(--light)' }}>
      <div className="container">
        <div className="section-head-center">
          <FadeUp><span className="eyebrow">Skills &amp; Stack</span></FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="display section-title">The tools I ship production with</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="section-lead" style={{ textAlign: 'center' }}>
              A full-stack toolkit honed across SaaS, AI, healthcare, government and telecom systems.
            </p>
          </FadeUp>
        </div>

        <Stagger className="skills-grid" gap={0.07}>
          {groups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="skill-cat">
                <div className="skill-cat-head">
                  <span className="skill-cat-icon">{g.icon}</span>
                  <h3 className="skill-cat-title">{g.title}</h3>
                </div>
                <div className="skill-cat-tags">
                  {g.skills.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
