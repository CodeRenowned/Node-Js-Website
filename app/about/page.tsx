import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — B2B SEO Agency in Bangalore',
  description: 'Learn about CodeRenowned — a results-driven B2B SEO agency in Bangalore helping global brands dominate search with AI-powered strategies.',
}

const VALUES = [
  {
    title: 'Results Over Vanity',
    desc: 'We measure success in revenue and pipeline, not just rankings and traffic.',
  },
  {
    title: 'Transparency Always',
    desc: 'Clear reporting, honest communication, and no hidden tactics — ever.',
  },
  {
    title: 'Always Evolving',
    desc: 'SEO changes fast. We stay ahead with continuous learning and adaptation.',
  },
  {
    title: 'Client Partnership',
    desc: 'We don\'t just execute — we collaborate closely as an extension of your team.',
  },
]

const TEAM = [
  { name: 'Founder & SEO Lead', role: 'Strategy & Growth' },
  { name: 'Technical SEO Expert', role: 'Site Architecture & CWV' },
  { name: 'Content Strategist', role: 'Topical Authority & AEO' },
  { name: 'Link Building Lead', role: 'Digital PR & Outreach' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-20">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <span className="section-label">About Us</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-2 leading-tight">
            We Help B2B Brands Win at Search
          </h1>
          <p className="text-white/60 font-body mt-5 max-w-xl mx-auto leading-relaxed">
            CodeRenowned is a specialist B2B SEO agency built for ambitious brands who know that
            organic search is their most powerful growth lever.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-5 leading-tight">
                Built from a Passion for Organic Growth
              </h2>
              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  CodeRenowned was founded in Bangalore with a single mission: to make enterprise-grade
                  SEO accessible to ambitious B2B brands. We saw too many companies wasting budget on
                  vanity metrics — rankings without revenue, traffic without pipeline.
                </p>
                <p>
                  We built a different kind of agency — one that combines deep technical expertise,
                  AI-powered strategy, and relentless focus on business outcomes. Today, we work with
                  SaaS companies, FinTechs, and B2B brands across the globe.
                </p>
                <p>
                  Our approach blends traditional SEO best practices with emerging opportunities in
                  Answer Engine Optimization (AEO) and AI-driven content, ensuring our clients are
                  ready for the future of search.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/about-office.jpg"
                alt="CodeRenowned office in Bangalore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <span className="section-label">Our Values</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">Find Us</span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-5">
                Based in Bangalore, Serving Globally
              </h2>
              <div className="space-y-4 text-gray-600 font-body">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>5, SLN, 4th floor, Balaji Layout,<br />Nallurahalli Main Rd, Whitefield,<br />Bangalore, Karnataka 560066</p>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918867713213" className="hover:text-primary transition-colors">+91 8867713213</a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@coderenowned.com" className="hover:text-primary transition-colors">info@coderenowned.com</a>
                </div>
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Get In Touch
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9858!2d77.7479!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzE3LjgiTiA3N8KwNDQnNTIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CodeRenowned office location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-5 py-16 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 font-body mb-8 max-w-md mx-auto">
            Let&apos;s talk about your goals and build a custom SEO strategy for your business.
          </p>
          <Link href="/contact" className="btn-ghost">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
