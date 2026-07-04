import type { IconType } from 'react-icons'
import { SiElasticsearch, SiKubernetes, SiPostgresql } from 'react-icons/si'

const ROWS = [
  { dur: '38s', skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'GraphQL', 'Tailwind CSS'] },
  { dur: '46s', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { dur: '42s', skills: ['AI Agents', 'LLM', 'WebSockets', 'Microservices', 'System Design', 'SaaS', 'REST APIs'] },
  { dur: '50s', skills: ['React Native', 'Express.js', 'Elasticsearch', 'DynamoDB', 'HIPAA', 'DevOps', 'Architecture'] },
  { dur: '44s', skills: ['OpenAI API', 'LangChain', 'Pinecone', 'RAG', 'Embeddings', 'Vector DB', 'Fine-tuning'] },
  { dur: '40s', skills: ['Stripe', 'Auth0', 'Supabase', 'Firebase', 'Prisma', 'tRPC', 'Zod'] },
  { dur: '48s', skills: ['Socket.io', 'RabbitMQ', 'Nginx', 'Terraform', 'CloudFront', 'Vercel', 'Serverless'] },
]

function SkillSet({ skills, hidden }: { skills: string[]; hidden?: boolean }) {
  return (
    <div className="skills-set" aria-hidden={hidden || undefined}>
      {skills.map((s) => (
        <span key={s} className="skill-pill">
          {s}
        </span>
      ))}
    </div>
  )
}

function FloatingTechIcon({
  name,
  Icon,
  color,
  style,
}: {
  name: string
  Icon: IconType
  color: string
  style: React.CSSProperties
}) {
  return (
    <div className="clay services-tech-float" style={style} aria-hidden>
      <div className="services-tech-float__card" title={name}>
        <Icon style={{ color }} aria-hidden />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="rounded-section"
      style={{
        margin: '20px 20px',
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative',
        background: "url('/images/bg-dark.jpg') center/cover no-repeat, #0F172A",
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.82)' }} />

      <FloatingTechIcon
        name="PostgreSQL"
        Icon={SiPostgresql}
        color="#336791"
        style={{ width: 104, top: 86, left: '46%', animationDuration: '8s' }}
      />
      <FloatingTechIcon
        name="Kubernetes"
        Icon={SiKubernetes}
        color="#326CE5"
        style={{ width: 162, top: 205, right: -48, animationDuration: '11s', animationDelay: '1s', opacity: 0.92 }}
      />
      <FloatingTechIcon
        name="Elasticsearch"
        Icon={SiElasticsearch}
        color="#FEC514"
        style={{ width: 122, bottom: 36, left: -42, animationDuration: '10s', animationDelay: '0.5s', opacity: 0.85 }}
      />

      <div className="container reveal" style={{ position: 'relative', zIndex: 2, paddingTop: 52, paddingBottom: 52 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 26, gap: 20, flexWrap: 'wrap' }}>
          <h2 className="display" style={{ fontSize: 'clamp(30px,3.3vw,42px)', color: '#fff', lineHeight: 1 }}>
            <span style={{ color: '#fff' }}>My</span> <span style={{ color: 'var(--primary)' }}>Services</span>
          </h2>
          <p style={{ maxWidth: 400, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14.5, lineHeight: 1.45, letterSpacing: '-.015em', color: 'rgba(255,255,255,.78)' }}>
            Full-stack engineering from architecture to production — SaaS, AI-powered systems, and enterprise platforms built to scale.
          </p>
        </div>

        <div className="skills-stage">
          <div className="skills-wrap">
            {ROWS.map((row) => (
              <div className="skills-row" key={row.dur}>
                <div className="track" style={{ animationDuration: row.dur }}>
                  <SkillSet skills={row.skills} />
                  <SkillSet skills={row.skills} hidden />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
