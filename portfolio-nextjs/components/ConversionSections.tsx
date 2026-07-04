const problemCards = [
  {
    label: 'AI Services',
    title: "AI Isn't Working the Way You Expected?",
    copy: 'I fix broken LLM integrations, agents, automations, RAG pipelines, prompt workflows, and AI features that are slow, unreliable, or difficult to scale.',
  },
  {
    label: 'Product Development',
    title: "Have a Great Idea but Don't Know Where to Start?",
    copy: 'I transform rough ideas into production-ready applications with scalable architecture, intuitive UX, secure APIs, databases, authentication, and cloud deployment.',
  },
  {
    label: 'Scalability',
    title: "Afraid Your App Won't Handle Growth?",
    copy: 'I optimize performance with caching, queues, database tuning, real-time systems, and cloud architecture before growth becomes a bottleneck.',
  },
  {
    label: 'Security',
    title: 'Security Concerns Delaying Your Launch?',
    copy: 'I strengthen authentication, APIs, authorization, OWASP compliance, testing workflows, and production readiness so your team can release securely and confidently.',
  },
]

export default function ConversionSections() {
  return (
    <section className="conversion-sections" aria-label="Implementation guidance and delivery process">
      <div className="container">
        <div className="conversion-hero reveal">
          <span className="conversion-eyebrow">Main pitch</span>
          <h2>When software blocks growth, I turn the hard problems into shipped products.</h2>
          <p>
            AI issues, scaling problems, security gaps, or a product idea that needs a real build plan:
            I help teams move from uncertainty to production with senior ownership across architecture,
            UX, delivery, and launch.
          </p>
        </div>

        <div className="conversion-pitch-list reveal d1">
          {problemCards.map((card) => (
            <article key={card.title} className="conversion-pitch-row">
              <div className="conversion-pitch-row__label">
                <span>{card.label}</span>
              </div>
              <div className="conversion-pitch-row__body">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
