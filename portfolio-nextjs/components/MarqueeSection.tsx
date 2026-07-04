const items = ['Full Stack', 'AI / LLM', 'SaaS', 'Cloud Architecture', 'Node.js', 'Next.js', 'System Design', 'Founding Engineer']

function MarqueeBlock({ hidden }: { hidden?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }} aria-hidden={hidden || undefined}>
      {items.flatMap((text, i) => [
        <span key={`t-${i}`} style={{ fontFamily: 'var(--font-body)', fontSize: 28, letterSpacing: '-.015em', color: '#fff', whiteSpace: 'nowrap', padding: '0 6px' }}>
          {text}
        </span>,
        <svg key={`s-${i}`} width="18" height="18" viewBox="0 0 34 34" fill="rgba(255,255,255,.9)" style={{ flexShrink: 0, margin: '0 8px' }}>
          <path d="M17 0L21.7 12.3L34 17L21.7 21.7L17 34L12.3 21.7L0 17L12.3 12.3L17 0Z" />
        </svg>,
      ])}
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: 72, background: 'linear-gradient(135deg,#2563EB,#1D4ED8)', transform: 'skewY(-1.5deg)', margin: '0 0 30px' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', transform: 'skewY(1.5deg)', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ alignItems: 'center' }}>
          <MarqueeBlock />
          <MarqueeBlock hidden />
        </div>
      </div>
    </div>
  )
}
