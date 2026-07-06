'use client'

import { useState, type CSSProperties } from 'react'
import Image from 'next/image'
import SiteGlassButton from '@/components/ui/site-glass-button'

type PortfolioProject = {
  id: string
  title: string
  img: string
  alt: string
  url: string
  objectPosition: string
  description: string
  tags: string[]
  accent: string
}

const PROJECTS: PortfolioProject[] = [
  {
    id: 'nucleos',
    title: 'Nucleos',
    img: '/images/portfolio/nucleos.png',
    alt: 'Nucleos digital experience platform for education in secure environments',
    url: 'https://nucleos.com',
    objectPosition: 'center top',
    description:
      'Education at scale in secure environments: a unified platform with 50+ learning apps, enterprise-grade security, and real-time analytics for justice-involved learners.',
    tags: ['SaaS', 'Full Stack'],
    accent: '#10B981',
  },
  {
    id: 'rentahuman',
    title: 'RentAHuman.AI',
    img: '/images/portfolio/rentahuman.png',
    alt: 'RentAHuman AI marketplace connecting AI agents to real humans for physical tasks',
    url: 'https://rentahuman.ai',
    objectPosition: 'center top',
    description:
      'The meatspace layer for AI agents: a YC-backed marketplace where AI agents hire 750k+ verified humans for real-world tasks across 100+ countries.',
    tags: ['AI / LLM', 'SaaS'],
    accent: '#2563EB',
  },
  {
    id: 'healthhavenrx',
    title: 'HealthHavenRx',
    img: '/images/portfolio/healthhavenrx.png',
    alt: 'HealthHavenRx AI-powered digital pharmacy platform homepage',
    url: 'https://healthhavenrx.com/',
    objectPosition: 'center top',
    description:
      'AI-powered digital pharmacy platform licensed across all 50 US states, scaled to 20k+ patients and 100k+ prescriptions delivered.',
    tags: ['Healthcare', 'AI / LLM'],
    accent: '#22C55E',
  },
  {
    id: 'mainstay',
    title: 'Mainstay Digital',
    img: '/images/portfolio/mainstay-digital.png',
    alt: 'Mainstay Digital interactive 3D product visualization platform',
    url: 'https://www.mainstaydigital.com/',
    objectPosition: 'center top',
    description:
      'Interactive 3D product platform: CAD-to-AR pipeline delivering immersive B2B demos that boost engagement 66% and accelerate decisions 15%.',
    tags: ['SaaS', 'Cloud'],
    accent: '#6366F1',
  },
  {
    id: 'tamm',
    title: 'TAMM Abu Dhabi',
    img: '/images/portfolio/tamm.png',
    alt: 'TAMM Abu Dhabi government services digital portal',
    url: 'https://www.tamm.abudhabi/',
    objectPosition: 'center top',
    description:
      'Government omni-channel services portal: modern digital experience connecting citizens to 900+ Abu Dhabi government services.',
    tags: ['Full Stack', 'Cloud'],
    accent: '#00A3A3',
  },
  {
    id: 'altron-healthtech',
    title: 'Altron HealthTech',
    img: '/images/portfolio/altron-healthtech.png',
    alt: 'Altron HealthTech enterprise healthcare technology corporate website',
    url: 'https://healthtech.altron.com',
    objectPosition: 'center top',
    description:
      "Enterprise corporate website for South Africa's leading HealthTech company: multi-audience UX across clinics, doctors, bureaus and enterprise, tabbed solutions across 6 verticals, and full POPIA compliance.",
    tags: ['HealthTech', 'Enterprise'],
    accent: '#1B6CA8',
  },
]

function ProjCard({
  project,
  hidden,
  onHover,
}: {
  project: PortfolioProject
  hidden?: boolean
  onHover?: () => void
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card"
      aria-hidden={hidden || undefined}
      style={{ '--proj-accent': project.accent } as CSSProperties}
      onMouseEnter={hidden ? undefined : onHover}
      onFocus={hidden ? undefined : onHover}
    >
      <Image
        className="card-inner"
        src={project.img}
        alt={hidden ? '' : project.alt}
        fill
        sizes="(max-width: 768px) 300px, 340px"
        style={{ objectFit: 'cover', objectPosition: project.objectPosition }}
      />
      <div className="proj-card__overlay" aria-hidden />
      <div className="proj-arrow">
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M1 17L17 1M17 1H5M17 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="proj-glass">
        <span className="ptitle">{project.title}</span>
        <p className="pdesc">{project.description}</p>
      </div>
    </a>
  )
}

export default function Portfolio() {
  const [featured, setFeatured] = useState<PortfolioProject>(PROJECTS[0])
  const [linkHover, setLinkHover] = useState(false)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="portfolio-header reveal">
          <h2 className="display portfolio-heading">
            Let&apos;s have a look at
            <br />
            my <span style={{ color: 'var(--primary)' }}>Portfolio</span>
          </h2>
          <SiteGlassButton as="a" href="/case-studies" variant="ghost" size="md" icon={<span />}>
            See All
          </SiteGlassButton>
        </div>

        <div className="proj-slider reveal">
          <div className="proj-track">
            {PROJECTS.map((project) => (
              <ProjCard key={project.id} project={project} onHover={() => setFeatured(project)} />
            ))}
            {PROJECTS.map((project) => (
              <ProjCard key={`dup-${project.id}`} project={project} hidden />
            ))}
          </div>
        </div>

        <div className="portfolio-dots reveal" aria-hidden>
          {PROJECTS.map((p) => (
            <span
              key={p.id}
              className={`portfolio-dot${featured.id === p.id ? ' portfolio-dot--active' : ''}`}
            />
          ))}
        </div>

        <div className="reveal portfolio-featured">
          <div className="portfolio-featured__row">
            <h3 className="portfolio-featured__title">{featured.title}</h3>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-featured__link"
              style={{
                color: linkHover ? '#fff' : '#344054',
                background: linkHover ? '#344054' : 'transparent',
              }}
              onMouseEnter={() => setLinkHover(true)}
              onMouseLeave={() => setLinkHover(false)}
              aria-label={`Open ${featured.title}`}
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="portfolio-featured__desc">{featured.description}</p>
        </div>
      </div>
    </section>
  )
}
