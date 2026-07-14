const SENIOR_PROOF_POINTS = [
  {
    stat: 'Millions',
    title: 'Scaled real-time systems',
    copy: 'Took a system stuck at 1,000 concurrent users to support millions with targeted architecture and performance work.',
  },
  {
    stat: '100k+ rps',
    title: 'Built for heavy traffic',
    copy: 'Architected large-dataset applications for high throughput and low-latency performance under serious load.',
  },
  {
    stat: 'Gov scale',
    title: 'Delivered in high-stakes teams',
    copy: 'Contributed core production features to a Dubai Government application where reliability mattered.',
  },
  {
    stat: 'Days',
    title: 'Unblocked stalled products',
    copy: 'Diagnosed critical blockers, fixed root causes, and helped products reach go-live on compressed timelines.',
  },
  {
    stat: 'Shipped',
    title: 'Production-first execution',
    copy: 'Released multiple stable, scalable products to production without letting quality collapse under deadline pressure.',
  },
  {
    stat: 'UX',
    title: 'Built experiences users trust',
    copy: 'Designed and delivered smooth, intuitive interfaces backed by performance that feels fast in real use.',
  },
]

export default function SoftwareRiskSection() {
  return (
    <section className="software-risk-section reveal" aria-labelledby="software-risk-heading">
      <div className="container">
        <div className="software-risk-card">
          <div className="software-risk-atmosphere" aria-hidden="true">
            <span className="software-risk-fault" />
            <span className="software-risk-ink" />
            <span className="software-risk-grain" />
          </div>

          <div className="software-risk-mast">
            <div className="software-risk-copy">
              <h2 id="software-risk-heading" className="software-risk-title">
                Your runway is bleeding on the wrong build
              </h2>
              <p className="software-risk-lede">
                Ghosted freelancers. Stalled MVPs. Code that breaks the first time real users show up.
                Most founders don&apos;t lose on the idea — they lose months and capital on weak ownership.
              </p>
            </div>

            <div className="software-risk-metrics" aria-label="Founder and startup software risks">
              <div className="software-risk-metric software-risk-metric--primary">
                <strong>6–18 months</strong>
                <span>Average time founders lose rewriting a product that was never architected to scale.</span>
              </div>
              <div className="software-risk-metric">
                <strong>50–80%</strong>
                <span>Startup software projects fail or stall when there&apos;s no senior owner from day one.</span>
              </div>
            </div>
          </div>

          <div className="software-risk-proof">
            <div className="software-risk-proof__header">
              <span>Proof under pressure</span>
              <strong>Senior ownership is how founders avoid expensive rebuilds.</strong>
            </div>
            <div className="software-risk-proof__grid">
              {SENIOR_PROOF_POINTS.map((item) => (
                <article key={item.title} className="software-risk-proof__item">
                  <span>{item.stat}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="software-risk-bottom">
            <p>
              You don&apos;t need more developers. You need one senior engineer who owns architecture,
              delivery, and the decisions that keep your product from becoming a rewrite.
            </p>
            <strong>That&apos;s the pain I remove for founders.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
