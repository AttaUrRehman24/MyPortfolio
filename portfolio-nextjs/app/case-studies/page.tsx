import type { Metadata } from 'next'
import CaseStudies from '@/components/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies | Atta Ur Rehman | Senior Full Stack Engineer',
  description:
    'Production case studies across healthcare, AI, government, telecom and fintech: HealthHavenRx, CoreMax Cloud, Qlu AI, TAMM, RentAHuman, Gravy, Nucleos, CelcomDigi and Mainstay Digital.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Atta Ur Rehman',
    description: 'Nine production platforms across healthcare, AI, government, telecom and fintech.',
    url: '/case-studies',
    type: 'article',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
