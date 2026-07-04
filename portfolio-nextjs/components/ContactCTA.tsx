'use client'

import { useEffect, useRef, useState } from 'react'
import SiteGlassButton from '@/components/ui/site-glass-button'

const CALENDLY_URL = 'https://calendly.com/hello-attarehman/30min?text_color=0f172a'
const CALENDLY_EMBED_URL = 'https://calendly.com/hello-attarehman/30min'
const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js'

export function CalendlyInlineWidget() {
  const [showCalendly, setShowCalendly] = useState(false)
  const calendlyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setShowCalendly(true)
  }, [])

  useEffect(() => {
    if (!showCalendly || !calendlyRef.current) return

    const initCalendly = () => {
      const parentElement = calendlyRef.current
      const calendly = (window as typeof window & {
        Calendly?: {
          initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
        }
      }).Calendly

      if (!parentElement || parentElement.children.length > 0 || !calendly) return

      calendly.initInlineWidget({
        url: CALENDLY_EMBED_URL,
        parentElement,
      })
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_URL}"]`
    )

    if (existingScript) {
      initCalendly()
      existingScript.addEventListener('load', initCalendly, { once: true })

      return () => {
        existingScript.removeEventListener('load', initCalendly)
      }
    }

    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_URL
    script.async = true
    script.addEventListener('load', initCalendly, { once: true })
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', initCalendly)
    }
  }, [showCalendly])

  if (!showCalendly) return null

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget"
      data-url={CALENDLY_EMBED_URL}
      style={{ minWidth: 320, height: 700 }}
    />
  )
}

export default function ContactCTA() {
  return (
    <section id="contact" className="contact-modern-section">
      <div className="container">
        <div className="contact-modern-card reveal">
          <div className="contact-modern-copy">
            <span className="contact-modern-eyebrow">Ready when the work matters</span>
            <h2>
              Have an important product to build or a senior role to fill?
            </h2>
            <p>
              Book a strategy call. I&apos;ll help you turn messy requirements, stalled systems, or
              high-pressure delivery into a clear path to production.
            </p>
          </div>

          <div className="contact-modern-panel">
            <div className="contact-modern-form contact-modern-form--button-only">
              <SiteGlassButton
                as="a"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                icon={<span />}
              >
                Book Call
              </SiteGlassButton>
            </div>

            <div className="contact-modern-badges">
              {[
                { icon: 'star', text: 'Senior ownership' },
                { icon: 'award', text: 'Scale-ready architecture' },
                { icon: 'shield', text: 'Production-grade delivery' },
              ].map((badge) => (
                <div key={badge.text}>
                  {badge.icon === 'star' && (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                    </svg>
                  )}
                  {badge.icon === 'award' && (
                    <svg width="16" height="16" viewBox="0 0 20 18" fill="currentColor">
                      <path d="M10 0L12.5 6H19L14 9.5 16 16 10 12.5 4 16 6 9.5 1 6H7.5L10 0Z" />
                    </svg>
                  )}
                  {badge.icon === 'shield' && (
                    <svg width="16" height="16" viewBox="0 0 18 20" fill="currentColor">
                      <path d="M9 0L1 4V9C1 13.418 4.418 17.5 9 19C13.582 17.5 17 13.418 17 9V4L9 0Z" />
                    </svg>
                  )}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
