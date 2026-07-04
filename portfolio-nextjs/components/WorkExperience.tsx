const experiences = [
  {
    company: 'TransData',
    period: 'Feb 2023 – Present',
    role: 'Principal Software Engineer',
    desc: 'Own full-stack products end-to-end — Node.js/NestJS + GraphQL services and React/Next.js front ends, shipping production code daily.',
  },
  {
    company: 'CloudMedx (US, Remote)',
    period: 'Apr 2021 – Mar 2023',
    role: 'Lead Full-Stack / Implementation Engineer',
    desc: 'Built React front ends and Node.js APIs for an enterprise US healthcare SaaS in a security-, compliance- and high-uptime-driven environment.',
  },
  {
    company: 'Qlu.ai (US, Remote)',
    period: 'Feb 2020 – Mar 2021',
    role: 'Senior Full-Stack Engineer (Founding Team)',
    desc: 'Founding engineer: architected and shipped an AI sourcing platform on AWS microservices, saving recruiters 15–20 hours/week.',
  },
  {
    company: 'Codility Solutions',
    period: 'Mar 2018 – Mar 2020',
    role: 'Software Engineer',
    desc: 'Delivered end-to-end full-stack features across React, Node.js and database layers; maintained Linux production infrastructure.',
  },
  {
    company: 'Thingtrax · Full-time',
    period: 'Jan 2017 - Nov 2017 · 11 mos',
    role: 'Software Engineer',
    desc: 'Worked as a contract Software Engineer at TechHub Connect, based at Arfa Software Technology Park, Lahore, Pakistan. Contributed to full-stack web development projects, collaborating with cross-functional teams to deliver scalable and client-focused software solutions.',
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" style={{ padding: '72px 0', background: '#fff' }}>
      <div className="container">
        <h2 className="reveal display" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.4vw,56px)', letterSpacing: '-.015em', color: 'var(--dark)', textAlign: 'center', marginBottom: 48, lineHeight: 1 }}>
          My Work Experience
        </h2>

        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, borderLeft: '2.5px dashed #e2e8f0', transform: 'translateX(-50%)' }} />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`exp-item reveal${i > 0 ? ` d${i + 1}` : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: i < experiences.length - 1 ? 58 : 0 }}
            >
              <div style={{ flex: 1, textAlign: 'right', paddingRight: 52 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, color: 'var(--dark)', letterSpacing: '-.015em', marginBottom: 6 }}>{exp.company}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-light)' }}>{exp.period}</p>
              </div>
              <div className="timeline-dot" style={{ position: 'relative', zIndex: 2, flexShrink: 0 }} />
              <div style={{ flex: 1, paddingLeft: 52 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 24, color: '#344054', letterSpacing: '-.015em', marginBottom: 8 }}>{exp.role}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-light)', lineHeight: 1.6 }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
