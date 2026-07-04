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
          <div className="software-risk-copy">
            <span className="software-risk-eyebrow">The real risk</span>
            <h2 id="software-risk-heading" className="software-risk-title">
              Custom software is expensive to get wrong
            </h2>
            <p className="software-risk-lede">
              The most expensive software is the software you have to throw away and rebuild.
            </p>
          </div>

          <div className="software-risk-metrics" aria-label="Custom software risk metrics">
            <div className="software-risk-metric software-risk-metric--primary">
              <strong>$75k - $350k</strong>
              <span>Typical custom software build cost, and higher for complex systems.</span>
            </div>
            <div className="software-risk-metric">
              <strong>50-80%</strong>
              <span>Failure rate across software projects when ownership and architecture are weak.</span>
            </div>
          </div>

          <div className="software-risk-proof">
            <div className="software-risk-proof__header">
              <span>Proof under pressure</span>
              <strong>Senior ownership is how expensive rebuilds get avoided.</strong>
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
              You don&apos;t have a coding problem. You have a senior-ownership problem: bad
              architecture from day one that compounds with every feature.
            </p>
            <strong>That&apos;s exactly what I de-risk.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
