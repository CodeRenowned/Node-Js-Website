'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Insights & Reports', href: '/insights-reports' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'Career', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      {/* Top bar */}
      <div className="bg-primary hidden md:block">
        <div className="container mx-auto px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-white text-xs font-body">
            <a href="tel:+918867713213" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <PhoneIcon />
              +91 8867713213
            </a>
            <a href="mailto:info@coderenowned.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <MailIcon />
              info@coderenowned.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-5 flex items-center justify-between h-16 lg:h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://www.coderenowned.com/wp-content/uploads/2021/12/logo-new.png"
            alt="CodeRenowned"
            width={160}
            height={48}
            priority
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-navy font-heading font-semibold text-[15px] hover:text-primary transition-colors"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronIcon />
                </button>
                <ul
                  className={`absolute top-full left-0 mt-0 w-52 bg-white shadow-lg rounded-lg py-2 border border-gray-100 transition-all duration-200 ${
                    openDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-navy font-heading font-semibold text-[15px] hover:text-primary transition-colors block"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex btn-primary text-xs px-5 py-2.5"
          >
            Get A Quote
          </Link>
          <button
            className="lg:hidden p-2 text-navy hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-5 py-4 space-y-1">
            {/* Mobile contact info */}
            <div className="pb-3 mb-3 border-b border-gray-100 space-y-1">
              <a href="tel:+918867713213" className="flex items-center gap-2 text-sm text-gray-600 py-1">
                <PhoneIcon /> +91 8867713213
              </a>
              <a href="mailto:info@coderenowned.com" className="flex items-center gap-2 text-sm text-gray-600 py-1">
                <MailIcon /> info@coderenowned.com
              </a>
            </div>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-2.5 font-heading font-semibold text-navy text-sm"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  >
                    {link.label} <ChevronIcon />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2.5 font-heading font-semibold text-navy text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Link href="/contact" className="btn-primary w-full justify-center text-xs" onClick={() => setMobileOpen(false)}>
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Icons ────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

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
