export interface Project {
  slug: string
  name: string
  tagline: string
  category: string
  url?: string
  gradient: string
  initials: string
  img?: string
  tags: string[]
  metric: string
  challenge: string
  built: string
  result: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'healthhavenrx',
    name: 'HealthHavenRx',
    tagline: 'AI digital pharmacy — licensed in all 50 US states',
    category: 'Healthcare · AI',
    url: 'https://healthhavenrx.com',
    gradient: 'linear-gradient(135deg,#1D4ED8,#3B82F6)',
    initials: 'HR',
    img: '/images/portfolio/healthhavenrx.png',
    tags: ['Next.js', 'Node.js', 'AI', 'AWS', 'HIPAA'],
    metric: '20k+ patients · 100k+ prescriptions',
    challenge:
      'Pharmacies and healthcare companies struggled to go digital — fragmented prescribing, fulfillment, insurance billing and pricing.',
    built:
      'An AI-powered, API-driven pharmacy platform — e-prescribing, fulfillment, insurance billing and real-time pricing transparency, licensed across all 50 US states, with real-time analytics.',
    result: 'Scaled to 20k+ patients and 100k+ prescriptions delivered, with full 50-state coverage.',
    featured: true,
  },
  {
    slug: 'coremax-cloud',
    name: 'CoreMax Cloud',
    tagline: 'All-in-one surgical practice SaaS',
    category: 'HealthTech · SaaS',
    url: 'https://coremaxcloud.com',
    gradient: 'linear-gradient(135deg,#2563EB,#60A5FA)',
    initials: 'CM',
    img: '/images/portfolio/coremaxcloud.png',
    tags: ['React', 'Node.js', 'iOS', 'Android', 'HIPAA'],
    metric: 'Multi-device, real-time coordination',
    challenge: 'Surgical practices buried in paperwork and redundant admin — outdated systems eating into patient care.',
    built:
      'An EHR + RCM + practice-management platform: scheduling, clinical charting, claims and analytics across web and native iOS / Android — HIPAA-compliant.',
    result: 'Real-time, multi-device coordination that gives surgical teams their time back and refocuses it on care.',
    featured: true,
  },
  {
    slug: 'qlu-ai',
    name: 'Qlu AI',
    tagline: 'AI executive sourcing (founding engineer)',
    category: 'AI · Recruiting',
    url: 'https://qlu.ai',
    gradient: 'linear-gradient(135deg,#0EA5E9,#2563EB)',
    initials: 'QL',
    img: '/images/portfolio/qlu-ai.png',
    tags: ['React', 'AWS', 'Microservices', 'Data Pipelines'],
    metric: '15–20 hrs/week saved per recruiter',
    challenge: 'Sourcing executives took recruiters up to 3 months of manual profile-digging across disconnected tools.',
    built:
      'An AI sourcing platform — React Chrome extension + web app on AWS microservices, data pipelines processing millions of records, multi-channel outreach automation.',
    result: 'Find exact-match candidates in seconds, not months. Saved recruiters 15–20 hours every week.',
    featured: true,
  },
  {
    slug: 'tamm',
    name: 'TAMM',
    tagline: 'Abu Dhabi Government omni-channel platform',
    category: 'Government · AI',
    url: 'https://tamm.abudhabi',
    gradient: 'linear-gradient(135deg,#1E3A8A,#3B82F6)',
    initials: 'TM',
    img: '/images/portfolio/tamm.png',
    tags: ['AI', 'Voice Assistant', 'Omni-channel', 'Microservices'],
    metric: '800+ services · millions of residents',
    challenge: '1,100+ government services fragmented across channels, hard for residents to navigate.',
    built:
      'Engineering on an AI-powered, omni-channel platform with a conversational voice assistant and unified, channel-agnostic service delivery.',
    result: 'A single platform serving millions of residents in real time, across every channel.',
    featured: true,
  },
  {
    slug: 'rentahuman',
    name: 'RentAHuman',
    tagline: 'The meatspace layer for AI agents',
    category: 'AI · Marketplace',
    url: 'https://rentahuman.ai',
    gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
    initials: 'RH',
    img: '/images/portfolio/rentahuman.png',
    tags: ['MCP', 'REST API', 'Marketplace', 'Escrow'],
    metric: '750k+ humans · 100+ countries',
    challenge: "AI agents can't act in the physical world — no way to hire and coordinate real people for real-world tasks.",
    built:
      'A marketplace + API where AI agents rent verified humans for physical tasks — browse by skill and location, post tasks, escrow payments, with MCP + REST API for autonomous hiring.',
    result: 'A YC-backed platform with 750k+ rentable humans across 100+ countries, hireable by AI agents autonomously.',
  },
  {
    slug: 'altron-healthtech',
    name: 'Altron HealthTech',
    tagline: "Enterprise HealthTech platform — South Africa's leading digital health company",
    category: 'HealthTech · Enterprise',
    url: 'https://healthtech.altron.com',
    gradient: 'linear-gradient(135deg,#0F4C75,#1B6CA8)',
    initials: 'AH',
    img: '/images/portfolio/altron-healthtech.png',
    tags: ['Enterprise B2B', 'Healthcare UX', 'Multi-audience', 'POPIA Compliance', 'Corporate Website'],
    metric: '30+ years · Primary digital platform for SA healthcare',
    challenge:
      "A legacy South African HealthTech brand needed a single digital platform that could speak to four distinct audiences — clinics, doctors, medical bureaus, and enterprise clients — without fragmenting the experience or diluting the brand.",
    built:
      'A full-scale enterprise corporate website with animated hero slider, tabbed solution navigation across 6 verticals (Practice Management, Medical Bureau, Occupational Health, Oncology, Healthcare Insights, Value Added Services), video testimonials, audience-segmentation UX, and POPIA/PAIA compliance documentation integrated throughout.',
    result:
      "A polished, conversion-focused enterprise website driving consultation bookings, partnership inquiries, and product demo requests — the primary digital touchpoint for South Africa's leading HealthTech company.",
  },
  {
    slug: 'nucleos',
    name: 'Nucleos',
    tagline: 'Education at scale in secure environments',
    category: 'EdTech · Security',
    url: 'https://nucleos.com',
    gradient: 'linear-gradient(135deg,#1E40AF,#60A5FA)',
    initials: 'NC',
    img: '/images/portfolio/nucleos.png',
    tags: ['Enterprise Security', 'Rostering', 'Analytics'],
    metric: '50+ unified learning apps',
    challenge:
      'Delivering education and workforce training inside locked-down correctional facilities, where access control and reliability are non-negotiable.',
    built: 'A secure digital-experience platform unifying 50+ learning apps with enterprise-grade security, rostering and real-time analytics.',
    result: 'Personalized learning delivered at scale to justice-involved and non-traditional learners.',
  },
  {
    slug: 'celcomdigi',
    name: 'CelcomDigi',
    tagline: 'Telecom for 20M+ subscribers',
    category: 'Telecom · Scale',
    url: 'https://celcomdigi.com',
    gradient: 'linear-gradient(135deg,#2563EB,#0EA5E9)',
    initials: 'CD',
    img: '/images/portfolio/celcomdigi.png',
    tags: ['REST APIs', 'Real-time', 'Secure Auth'],
    metric: '20M+ subscribers served',
    challenge: 'Real-time digital services had to stay reliable and secure at the scale of a national telecom.',
    built: 'API integrations and real-time digital services with secure authentication, engineered for high-volume reliability.',
    result: 'Channel-agnostic digital services holding up under 20M+ subscribers.',
  },
  {
    slug: 'mainstay-digital',
    name: 'Mainstay Digital',
    tagline: 'Interactive 3D product platform',
    category: 'B2B · 3D',
    url: 'https://mainstaydigital.com',
    gradient: 'linear-gradient(135deg,#3B82F6,#1D4ED8)',
    initials: 'MD',
    img: '/images/portfolio/mainstay-digital.png',
    tags: ['3D', 'AR', 'CAD Pipeline'],
    metric: '66% higher engagement · 15% faster decisions',
    challenge:
      'Complex B2B products are hard to explain — static slides and shipping thousand-pound demo units across continents slow deals and inflate costs.',
    built:
      'A platform that turns CAD files into interactive 3D experiences — product stills, AR and interactive 3D video — on a flat-fee model, accessible from any device.',
    result: 'Higher engagement and faster decisions without the demo-shipping cost — 66% higher engagement, 15% faster decisions.',
  },
]
