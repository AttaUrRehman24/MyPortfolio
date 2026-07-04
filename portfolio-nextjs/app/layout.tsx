import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://attaurrehman.dev'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Atta Ur Rehman — Senior Full Stack Engineer | Next.js, Node.js & AI',
    template: '%s | Atta Ur Rehman',
  },
  description:
    'Senior & Founding Full-Stack Engineer with 10+ years building scalable SaaS, AI-powered systems, healthcare, government and telecom platforms. Next.js, Node.js, NestJS, TypeScript & AWS.',
  keywords: [
    'Senior Full Stack Engineer',
    'Next.js Developer',
    'Node.js Developer',
    'AI Engineer',
    'SaaS Architect',
    'Fractional CTO',
    'NestJS',
    'TypeScript',
    'React',
    'AWS',
    'Atta Ur Rehman',
  ],
  authors: [{ name: 'Atta Ur Rehman', url: SITE_URL }],
  creator: 'Atta Ur Rehman',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Atta Ur Rehman',
    title: 'Atta Ur Rehman — Senior Full Stack Engineer',
    description:
      '10+ years architecting and shipping production SaaS, AI and high-scale systems. Next.js, Node.js, NestJS, TypeScript & AWS.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atta Ur Rehman — Senior Full Stack Engineer',
    description: '10+ years shipping production SaaS, AI and high-scale systems. Next.js · Node.js · NestJS · AWS.',
    creator: '@AttaUrRehman24',
  },
  robots: { index: true, follow: true },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Atta Ur Rehman',
  jobTitle: 'Senior Full Stack Engineer',
  description:
    'Senior & Founding Full-Stack Engineer with 10+ years building scalable SaaS, AI-powered systems, healthcare, government and telecom platforms.',
  url: SITE_URL,
  email: 'mailto:iamatta24@gmail.com',
  sameAs: ['https://github.com/AttaUrRehman24'],
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
  knowsAbout: [
    'Full Stack Development',
    'Next.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'React',
    'GraphQL',
    'AI & LLM',
    'SaaS Architecture',
    'AWS',
    'System Design',
  ],
  worksFor: { '@type': 'Organization', name: 'TransData' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/site.css" />
        <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
      </head>
      <body style={{ backgroundColor: '#ffffff' }} data-personality="bold" data-texture="glow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  )
}
