const problemCards = [
  {
    label: 'AI Services',
    title: "AI Isn't Working the Way You Expected?",
    copy: 'I fix broken LLM integrations, agents, automations, RAG pipelines, prompt workflows, and AI features that are slow, unreliable, or difficult to scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    label: 'Product Development',
    title: "Have a Great Idea but Don't Know Where to Start?",
    copy: 'I transform rough ideas into production-ready applications with scalable architecture, intuitive UX, secure APIs, databases, authentication, and cloud deployment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    label: 'Scalability',
    title: "Afraid Your App Won't Handle Growth?",
    copy: 'I optimize performance with caching, queues, database tuning, real-time systems, and cloud architecture before growth becomes a bottleneck.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V10M12 19V5M20 19v-6" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
  {
    label: 'Security',
    title: 'Security Concerns Delaying Your Launch?',
    copy: 'I strengthen authentication, APIs, authorization, OWASP compliance, testing workflows, and production readiness so your team can release securely and confidently.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v5.5c0 4.2 2.9 7.5 7 8.5 4.1-1 7-4.3 7-8.5V6l-7-3Z" />
        <path d="m9.5 12 1.8 1.8L14.5 10" />
      </svg>
    ),
  },
]

const floaterIcons = [
  {
    key: 'code',
    className: 'conversion-floater--a',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16 4 12l4-4M16 8l4 4-4 4" />
      </svg>
    ),
  },
  {
    key: 'database',
    className: 'conversion-floater--b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    key: 'cloud',
    className: 'conversion-floater--c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 19a4.5 4.5 0 0 1-.5-8.98A6 6 0 0 1 17.6 8.5 4.5 4.5 0 0 1 17 19H6.5Z" />
      </svg>
    ),
  },
  {
    key: 'bolt',
    className: 'conversion-floater--d',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    key: 'layers',
    className: 'conversion-floater--e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
]

export default function ConversionSections() {
  return (
    <section className="conversion-sections" aria-label="Implementation guidance and delivery process">
      <div className="conversion-floaters" aria-hidden="true">
        {floaterIcons.map((item) => (
          <span key={item.key} className={`conversion-floater ${item.className}`}>
            {item.icon}
          </span>
        ))}
      </div>

      <div className="container">
        <div className="conversion-hero">
          <span className="conversion-hero__mark" aria-hidden="true">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
              <path d="M14.1 0 8.4 12.6h5.7V26H0V13.4L6.2 0h7.9Zm19.9 0-5.7 12.6h5.7V26H20V13.4L26.2 0h7.8Z" fill="currentColor" />
            </svg>
          </span>

          <div className="conversion-hero__col">
            <span className="conversion-eyebrow reveal d1">Main pitch</span>
            <h2 className="reveal d2">
              When software blocks growth, I turn <span className="conversion-hero__accent">the hard problems</span> into
              shipped products.
            </h2>
          </div>

          <div className="conversion-hero__divider" aria-hidden="true" />

          <div className="conversion-hero__col conversion-hero__col--lede">
            <p className="reveal d3">
              AI issues, scaling problems, security gaps, or a product idea that needs a real build plan:
              I help teams move from uncertainty to production with senior ownership across architecture,
              UX, delivery, and launch.
            </p>
          </div>
        </div>

        <div className="conversion-pitch-grid reveal d1">
          {problemCards.map((card) => (
            <article key={card.title} className="conversion-pitch-card">
              <div className="conversion-pitch-card__icon">{card.icon}</div>
              <span className="conversion-pitch-card__label">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
