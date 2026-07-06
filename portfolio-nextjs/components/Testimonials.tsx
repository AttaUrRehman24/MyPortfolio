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
    <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2563EB">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.5)', marginLeft: 4 }}>5.0</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="rounded-section"
      style={{
        margin: '20px 20px',
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative',
        background: "url('/images/bg-dark.jpg') center/cover no-repeat, #0F172A",
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,.78)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 72, paddingBottom: 72 }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 46px' }}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 'clamp(30px,3.5vw,42px)', color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 20 }}>
            Testimonials That Speak to My Results
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>
            What teams and founders say about working with a senior engineer who owns the build end-to-end.
          </p>
        </div>

        <div className="testimonials-marquee" aria-label="Client testimonials carousel">
          <div className="testimonials-track">
            {testimonialLoop.map((t, i) => (
            <div key={`${t.role}-${i}`} className={`tcard reveal d${(i % 5) + 1}`}>
              <svg width="28" height="28" viewBox="0 0 32 28" fill="rgba(37,99,235,.7)" style={{ marginBottom: 16 }}>
                <path d="M0 28V16C0 7.163 5.373.588 16.128 0L17 3.235C11.355 4.235 8.484 6.941 8 12H12V28H0ZM16 28V16C16 7.163 21.373.588 32.128 0L33 3.235C27.355 4.235 24.484 6.941 24 12H28V28H16Z" />
              </svg>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,.68)', marginBottom: 24, flex: 1 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.1)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, color: '#fff', fontSize: 15, flexShrink: 0 }}>
                  {t.initial}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#fff' }}>{t.name}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.45)' }}>{t.role}</p>
                </div>
                <Stars />
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
