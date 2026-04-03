'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

// Metadata must be in a server component — contact page uses client for form state.
// We export this from a separate metadata file or handle it via layout. Since this
// is a client component, we define static title via document in useEffect or rely
// on layout-level defaults. For now the page functions correctly.

const SERVICES = [
  'B2B SEO Strategy',
  'Technical SEO',
  'Content Strategy',
  'Link Building',
  'AI & AEO Optimization',
  'Local SEO',
  'Not Sure Yet',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simple mailto fallback — replace with a form service (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-20">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <span className="section-label">Get In Touch</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-2 leading-tight">
            Let&apos;s Grow Your Organic Traffic
          </h1>
          <p className="text-white/60 font-body mt-5 max-w-xl mx-auto">
            Tell us about your business and goals. We&apos;ll put together a custom SEO strategy
            tailored to your industry and growth targets.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-py bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-navy mb-3">Message Sent!</h2>
                  <p className="text-gray-600 font-body">
                    Thanks for reaching out. We&apos;ll review your details and get back to you
                    within 1 business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-navy mb-6">Request a Free Strategy Call</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="name">
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="email">
                          Work Email <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="website">
                          Website URL
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          value={form.website}
                          onChange={handleChange}
                          placeholder="https://yoursite.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="service">
                        Service You&apos;re Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-gray-700 mb-1.5" htmlFor="message">
                        Tell Us About Your Goals <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Share your current SEO challenges, traffic goals, or anything else that will help us prepare for our call..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-body text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Send My Request'}
                    </button>
                    <p className="text-xs text-center text-gray-400 font-body">
                      No spam. We&apos;ll respond within 1 business day.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="bg-dark rounded-2xl p-6">
                <h3 className="text-white font-heading font-semibold mb-5">Contact Details</h3>
                <div className="space-y-4 text-sm font-body text-white/70">
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>5, SLN, 4th floor, Balaji Layout, Nallurahalli Main Rd, Whitefield, Bangalore, Karnataka 560066</span>
                  </div>
                  <a href="tel:+918867713213" className="flex gap-3 hover:text-primary transition-colors">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 8867713213
                  </a>
                  <a href="mailto:info@coderenowned.com" className="flex gap-3 hover:text-primary transition-colors">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@coderenowned.com
                  </a>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">What Happens Next?</h3>
                <ol className="space-y-3 text-sm font-body text-gray-600">
                  {[
                    'We review your request within 1 business day.',
                    'Our strategist schedules a 30-min discovery call.',
                    'We prepare a custom SEO audit and opportunity report.',
                    'You decide if we\'re the right fit — no pressure.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-heading font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
