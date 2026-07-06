import SiteGlassButton from '@/components/ui/site-glass-button'

const hiringSignals = [
  'I do not just write tickets. I own outcomes, architecture, delivery, and the product experience.',
  'I can step into messy systems, find the real bottleneck, and ship production fixes fast.',
  'I bring founder-level judgment across system design, user experience, reliability, and speed.',
  'Recruiters get a senior engineer who can talk to product, lead delivery, and still write the hard code.',
]

export default function WhyHireMe() {
  return (
    <section
      id="about"
      className="rounded-section"
      style={{ margin: '20px 20px', borderRadius: 50, overflow: 'hidden', background: '#0F172A' }}
    >
      <div
        className="container"
        style={{
          paddingTop: 72,
          paddingBottom: 72,
          display: 'flex',
          alignItems: 'center',
          gap: 42,
        }}
      >
        {/* ── Left: portrait + animated background ── */}
        <div className="reveal-left why-img-col">

          {/* Animated background layers */}
          <div className="why-bg" aria-hidden>
            <div className="why-bg__grid" />
            <div className="why-bg__orb why-bg__orb--1" />
            <div className="why-bg__orb why-bg__orb--2" />
            <div className="why-bg__orb why-bg__orb--3" />
            <div className="why-bg__ring why-bg__ring--1" />
            <div className="why-bg__ring why-bg__ring--2" />
            <div className="why-bg__ring why-bg__ring--3" />
          </div>

          {/* Spinning dashed accent ring */}
          <div className="why-dash-ring" aria-hidden />

          {/* Available-for-work badge */}
          <div className="why-badge">
            <span className="why-badge__dot" />
            Available for Projects
          </div>

          {/* Portrait — floats gently */}
          <img
            src="/images/unnamed-removebg-preview.png"
            alt="Atta Ur Rehman"
            className="why-portrait"
          />
        </div>

        {/* ── Right: text ── */}
        <div className="reveal-right why-text-col">
          <h2 className="why-headline">Why Hire me?</h2>

          <p className="why-desc">
            Senior &amp; founding full-stack engineer with 10+ years shipping production SaaS,
            AI-powered systems, and high-scale platforms. I architect, build, and ship the way
            a founding engineer does.
          </p>

          <div className="why-hire-pitch">
            <span className="why-hire-pitch__eyebrow">What you really get</span>
            {hiringSignals.map((signal, index) => (
              <div key={signal} className="why-hire-pitch__item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{signal}</p>
              </div>
            ))}
          </div>

          <div style={{ width: 'fit-content' }}>
            <SiteGlassButton as="a" href="#contact" size="md">
              Hire Me
            </SiteGlassButton>
          </div>
        </div>
      </div>
    </section>
  )
}
