import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  { label: 'B2B SEO', href: '/services/b2b-seo' },
  { label: 'Technical SEO', href: '/services/technical-seo' },
  { label: 'Content Strategy', href: '/services/content-strategy' },
  { label: 'Link Building', href: '/services/link-building' },
  { label: 'AI & AEO Optimization', href: '/services/ai-aeo' },
  { label: 'Local SEO', href: '/services/local-seo' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights & Reports', href: '/insights-reports' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/coderenowned01',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/code_renowned',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/coderenowned/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/coderenowned/',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      {/* CTA Band */}
      <div className="bg-primary">
        <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-white/80 text-sm font-body mb-1">Ready to grow your organic traffic?</p>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white">
              Let&apos;s Build Your SEO Engine
            </h2>
          </div>
          <Link href="/contact" className="btn-ghost whitespace-nowrap flex-shrink-0">
            Get A Free Strategy Call
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="https://www.coderenowned.com/wp-content/uploads/2021/12/logo-new.png"
                alt="CodeRenowned"
                width={150}
                height={45}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              We&apos;re a B2B SEO agency for ambitious brands — blending AI, AEO, and
              content strategy to drive authority, organic traffic, and revenue.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-primary text-sm font-body transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-primary text-sm font-body transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm font-body text-white/60">
              <li className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 text-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  5, SLN, 4th floor, Balaji Layout,<br />
                  Nallurahalli Main Rd, Whitefield,<br />
                  Bangalore, Karnataka 560066
                </span>
              </li>
              <li>
                <a
                  href="tel:+918867713213"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <span className="text-primary flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  +91 8867713213
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@coderenowned.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <span className="text-primary flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  info@coderenowned.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-body">
          <p>&copy; {year} CodeRenowned. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
