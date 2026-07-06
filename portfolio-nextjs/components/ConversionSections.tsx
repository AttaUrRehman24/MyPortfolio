const problemCards = [
  {
    label: 'AI Engineering',
    title: "You built the AI feature. It just doesn't work right.",
    copy: "Most LLM integrations fail quietly: hallucinations slip through, RAG pipelines return garbage, agents loop or break under load. I come in after the hype, find what's actually wrong, and rebuild it to be reliable, fast, and production-grade.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    label: 'Product Development',
    title: "The idea is clear in your head. The path to production isn't.",
    copy: "I've taken rough napkin ideas to deployed products more times than I can count. I handle the full build architecture, APIs, auth, database design, cloud setup, so you're not stitching together freelancers or guessing at decisions that will cost you later.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
      </svg>
    ),
  },
  {
    label: 'Scalability',
    title: "Your app works fine. Until it doesn't.",
    copy: "Traffic spikes, slow queries, jobs that back up under load these aren't random. They're predictable, and they're fixable before they become incidents. I tune the systems that are already there and redesign the ones that won't hold.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V10M12 19V5M20 19v-6" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
  {
    label: 'Security',
    title: "Security debt is invisible right up until it isn't.",
    copy: "Most teams know the gaps are there. They ship anyway. I work through auth flows, API exposure, authorization logic, and OWASP coverage not as a compliance checkbox, but as the thing that lets you actually trust what you're deploying.",
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
              Software should ship.
              <br />
              When it doesn&apos;t, <span className="conversion-hero__accent">that&apos;s where I come in.</span>
            </h2>
          </div>

          <div className="conversion-hero__divider" aria-hidden="true" />

          <div className="conversion-hero__col conversion-hero__col--lede">
            <p className="reveal d3">
              From messy codebases to half-built AI features to systems that buckle under load I&apos;ve seen the
              patterns. I work directly with engineering teams to unblock delivery, make the right architecture calls,
              and get production-ready products out the door.
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
