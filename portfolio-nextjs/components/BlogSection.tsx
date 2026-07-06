'use client'

import { useState } from 'react'
import SiteGlassButton from '@/components/ui/site-glass-button'

const posts = [
  {
    category: 'Architecture',
    title: 'Designing multi-tenant SaaS that scales from MVP to thousands of customers',
    date: 'Jun 2026',
    readTime: '7 min read',
    color: '#eff4ff',
    accent: '#2563EB',
    img: '/images/blog-1.jpg',
  },
  {
    category: 'AI Engineering',
    title: 'Shipping real LLM features to production, beyond the notebook POC',
    date: 'May 2026',
    readTime: '6 min read',
    color: '#fff3eb',
    accent: '#3B82F6',
    img: '/images/project-1.jpg',
  },
  {
    category: 'DevOps',
    title: 'Zero-downtime deployment: Docker, AWS and CI/CD that ships safely',
    date: 'Apr 2026',
    readTime: '5 min read',
    color: '#eaf4ff',
    accent: '#1D4ED8',
    img: '/images/blog-1.jpg',
  },
]

export default function BlogSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 44 }}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'clamp(30px,3.5vw,42px)', color: '#344054', letterSpacing: '-.015em', lineHeight: 1 }}>From my blog post</h2>
          <SiteGlassButton as="a" href="#" variant="ghost" size="md" icon={<span />}>
            See All
          </SiteGlassButton>
        </div>

        <div className="blog-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {posts.map((post, i) => (
            <article key={post.title} className={`blog-card reveal d${i + 1}`}>
              <div style={{ height: 230, borderRadius: 24, overflow: 'hidden', position: 'relative', background: post.color, marginBottom: 20 }}>
                <img src={post.img} alt={post.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', bottom: 16, left: 16, background: post.accent, color: '#fff', fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 600, padding: '5px 14px', borderRadius: 8 }}>
                  {post.category}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-light)', marginBottom: 10 }}>
                {post.date} · {post.readTime}
              </p>
              <h3 className="blog-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: 'var(--dark)', letterSpacing: '-.01em', lineHeight: 1.3, marginBottom: 12, transition: 'color .2s' }}>
                {post.title}
              </h3>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: hoveredLink === post.title ? 'var(--primary)' : '#344054',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={() => setHoveredLink(post.title)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Read more{' '}
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path d="M1 12L12 1M12 1H3M12 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
