const testimonials = [
  {
    name: 'CloudMedx',
    role: 'US Healthcare SaaS',
    text: 'Atta delivered production-grade architecture and shipped complex features on schedule. His full-stack ownership made our platform reliable at scale.',
    avatarBg: 'var(--primary)',
    initial: 'C',
  },
  {
    name: 'Qlu.ai',
    role: 'AI Sourcing Platform',
    text: 'Founding-engineer level execution, from AWS microservices to React front ends. Saved our team months of rework with sound architecture from day one.',
    avatarBg: 'var(--secondary)',
    initial: 'Q',
  },
  {
    name: 'TransData',
    role: 'Enterprise Engineering',
    text: 'Highly recommended for any senior engineering role. Atta combines deep technical skill with the judgment to ship the right thing for real users.',
    avatarBg: '#344054',
    initial: 'T',
  },
  {
    name: 'Dubai Government',
    role: 'GovTech Platform',
    text: 'He understood the pressure of a high-stakes release and delivered clean, reliable features without needing constant hand-holding.',
    avatarBg: '#1D4ED8',
    initial: 'D',
  },
  {
    name: 'Codility Solutions',
    role: 'Full-Stack Delivery',
    text: 'Atta is the kind of engineer hiring teams look for: senior ownership, clear communication, and the ability to turn ambiguity into shipped product.',
    avatarBg: '#0F172A',
    initial: 'C',
  },
  {
    name: 'Thingtrax / TechHub Connect',
    role: 'Client-Focused Software',
    text: 'He found the architecture problems quickly, simplified the roadmap, and helped us move from stalled build to production-ready system.',
    avatarBg: '#2563EB',
    initial: 'T',
  },
  {
    name: 'TransData',
    role: 'Scale-Up Engineering Team',
    text: 'What stood out was his ability to own both the code and the product tradeoffs. That is rare in full-stack engineering.',
    avatarBg: '#38BDF8',
    initial: 'T',
  },
]

const testimonialLoop = [...testimonials, ...testimonials]

function Stars() {
  return (
    <div className="tcard-stars" aria-label="5.0 rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span>5.0</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials-section rounded-section" id="testimonials">
      <div className="testimonials-section__veil" aria-hidden />

      <div className="container-fluid testimonials-section__inner">
        <div className="testimonials-header reveal">
          <p className="testimonials-kicker">Client voices</p>
          <h2 className="testimonials-title">Testimonials That Speak to My Results</h2>
          <p className="testimonials-lede">
            What teams and founders say about working with a senior engineer who owns the build end-to-end.
          </p>
        </div>
      </div>

      <div className="testimonials-marquee" aria-label="Client testimonials carousel">
        <div className="testimonials-track">
          {testimonialLoop.map((t, i) => (
            <article key={`${t.name}-${t.role}-${i}`} className="tcard">
              <div className="tcard-top">
                <svg className="tcard-quote" width="26" height="22" viewBox="0 0 32 28" fill="currentColor" aria-hidden>
                  <path d="M0 28V16C0 7.163 5.373.588 16.128 0L17 3.235C11.355 4.235 8.484 6.941 8 12H12V28H0ZM16 28V16C16 7.163 21.373.588 32.128 0L33 3.235C27.355 4.235 24.484 6.941 24 12H28V28H16Z" />
                </svg>
                <Stars />
              </div>
              <p className="tcard-text">{t.text}</p>
              <footer className="tcard-footer">
                <div
                  className="tcard-avatar"
                  style={{ background: t.avatarBg }}
                  aria-hidden
                >
                  {t.initial}
                </div>
                <div className="tcard-meta">
                  <p className="tcard-name">{t.name}</p>
                  <p className="tcard-role">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
