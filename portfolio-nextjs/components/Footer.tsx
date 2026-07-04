'use client'

import { useState } from 'react'
import SiteGlassButton from '@/components/ui/site-glass-button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Resume', href: '#experience' },
  { label: 'Project', href: '#portfolio' },
]

const contactLinks = [
  { label: 'iamatta24@gmail.com', href: 'mailto:iamatta24@gmail.com' },
  { label: 'github.com/AttaUrRehman24', href: 'https://github.com/AttaUrRehman24' },
  { label: 'Senior Full Stack Engineer', href: '#' },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: hover ? '#FFFFFF' : 'rgba(226,232,240,.72)',
        textDecoration: 'none',
        letterSpacing: '-.015em',
        transition: 'color .2s, transform .2s',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  )
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: hover ? 'linear-gradient(135deg,#2563EB,#38BDF8)' : 'rgba(255,255,255,.08)',
        border: `1px solid ${hover ? 'rgba(96,165,250,.7)' : 'rgba(255,255,255,.12)'}`,
        color: hover ? '#fff' : '#BFDBFE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'background .2s, border-color .2s, color .2s, transform .2s',
        transform: hover ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#08111F', borderRadius: '28px 28px 0 0', overflow: 'hidden', borderTop: '1px solid rgba(96,165,250,.18)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 0%,rgba(37,99,235,.22),transparent 32%),radial-gradient(circle at 80% 15%,rgba(56,189,248,.16),transparent 30%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 34, paddingBottom: 22 }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 18, marginBottom: 20, gap: 18, flexWrap: 'wrap', borderRadius: 18, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px,2.7vw,40px)', color: '#fff', letterSpacing: '-.04em', lineHeight: 1, maxWidth: 460 }}>
            Need a senior engineer who can own the outcome?
          </h2>
          <SiteGlassButton as="a" href="mailto:iamatta24@gmail.com" size="sm">
            Start a Conversation
          </SiteGlassButton>
        </div>

        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 22 }} />

        <div className="reveal footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(135deg,#2563EB,#38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 22px rgba(37,99,235,.3)' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 12, fontFamily: 'var(--font-body)' }}>AR</span>
              </div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 16, fontFamily: 'var(--font-body)' }}>Atta Ur Rehman</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.55, color: 'rgba(226,232,240,.72)', maxWidth: 320, letterSpacing: '-.015em' }}>
              Senior full-stack engineer for teams that need production ownership, scalable architecture, and polished product execution.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <SocialIcon href="https://github.com/AttaUrRehman24">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:iamatta24@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 6l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/atta-ur-rehman-software-engineer/">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13.5, color: '#fff', letterSpacing: '-.015em', marginBottom: 12 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 13.5, color: '#fff', letterSpacing: '-.015em', marginBottom: 12 }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 16 }} />
        <div className="footer-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(226,232,240,.62)', letterSpacing: '-.015em' }}>
            Copyright© {new Date().getFullYear()} Atta Ur Rehman. All Rights Reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: '#BFDBFE', letterSpacing: '-.015em' }}>
            Built for recruiters, founders, and teams that value ownership.
          </p>
        </div>
      </div>
    </footer>
  )
}
