import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers — Join the CodeRenowned Team',
  description: 'Join a fast-growing B2B SEO agency in Bangalore. We\'re always looking for talented SEO specialists, content strategists, and digital marketers.',
}

const OPENINGS = [
  {
    title: 'SEO Analyst',
    type: 'Full-time',
    location: 'Bangalore (Hybrid)',
    desc: 'Conduct keyword research, technical audits, and on-page optimization for B2B clients across multiple industries.',
  },
  {
    title: 'Content Strategist',
    type: 'Full-time',
    location: 'Bangalore (Hybrid)',
    desc: 'Develop content strategies, editorial calendars, and high-value long-form content that drives topical authority.',
  },
  {
    title: 'Link Building Specialist',
    type: 'Full-time',
    location: 'Remote',
    desc: 'Execute white-hat link acquisition campaigns through digital PR, guest posting, and relationship outreach.',
  },
]

const PERKS = [
  { icon: '📈', label: 'Fast Career Growth' },
  { icon: '🧠', label: 'Continuous Learning Budget' },
  { icon: '🏡', label: 'Hybrid / Remote Options' },
  { icon: '🌍', label: 'Work with Global Brands' },
  { icon: '💰', label: 'Competitive Compensation' },
  { icon: '🤝', label: 'Collaborative Culture' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-20">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <span className="section-label">Join Our Team</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-2 leading-tight">
            Build Your SEO Career at CodeRenowned
          </h1>
          <p className="text-white/60 font-body mt-5 max-w-xl mx-auto">
            We&apos;re a growing B2B SEO agency in Bangalore looking for talented, curious, and
            results-driven people to join our team.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <span className="section-label">Why CodeRenowned</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
              A Place Where You Can Thrive
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PERKS.map(({ icon, label }) => (
              <div key={label} className="card text-center p-4">
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-sm font-body font-medium text-navy leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-py bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <span className="section-label">Open Positions</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
              Current Opportunities
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {OPENINGS.map(({ title, type, location, desc }) => (
              <div key={title} className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-navy text-lg mb-1">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-body">{type}</span>
                      <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-body">{location}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-body leading-relaxed">{desc}</p>
                  </div>
                  <a
                    href={`mailto:info@coderenowned.com?subject=Application: ${encodeURIComponent(title)}`}
                    className="btn-primary text-xs whitespace-nowrap flex-shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Speculative */}
          <div className="max-w-3xl mx-auto mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="font-heading font-semibold text-navy text-xl mb-2">Don&apos;t See Your Role?</h3>
            <p className="text-gray-600 font-body mb-6">
              We&apos;re always interested in talented SEO professionals. Send us your CV and tell us how
              you can add value.
            </p>
            <a
              href="mailto:info@coderenowned.com?subject=Speculative Application — CodeRenowned"
              className="btn-primary"
            >
              Send Speculative CV
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
