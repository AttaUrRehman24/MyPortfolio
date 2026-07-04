'use client'

import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SoftwareRiskSection from '@/components/SoftwareRiskSection'
import Services from '@/components/Services'
import ConversionSections from '@/components/ConversionSections'
import WorkExperience from '@/components/WorkExperience'
import WhyHireMe from '@/components/WhyHireMe'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import ContactCTA, { CalendlyInlineWidget } from '@/components/ContactCTA'
import MarqueeSection from '@/components/MarqueeSection'
import Footer from '@/components/Footer'
import { useReveal } from '@/hooks/useReveal'

export default function HomePage() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <SoftwareRiskSection />
      <ContactCTA />
      <ConversionSections />
      <WhyHireMe />
      <WorkExperience />
      <Portfolio />
      <Testimonials />
      <section className="calendly-standalone-section" aria-label="Schedule a meeting">
        <div className="container">
          <CalendlyInlineWidget />
        </div>
      </section>
      <Services />
      <MarqueeSection />
      <Footer />
    </>
  )
}
