import Link from 'next/link'
import Image from 'next/image'
import { getRecentBlogPosts, getFeaturedImage, getExcerpt, formatDate } from '@/lib/wordpress'

// ── Client logos data ─────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  'Carin',
  'Frugal Testing',
  'Kajaria',
  'IM Gears',
  'Astra Aerospace',
]

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white">
      {/* Main banner — centred */}
      <div className="container mx-auto px-5 py-20 lg:py-28 text-center">
        {/* H1 — keyword label */}
        <h1
          className="font-heading font-semibold mb-5"
          style={{ fontSize: '18px', color: '#11AAA6' }}
        >
          B2B SEO Agency for Industrial &amp; Technology Companies
        </h1>

        {/* H2 — main headline */}
        <h2
          className="font-heading font-bold leading-tight mb-6 mx-auto"
          style={{ fontSize: 'clamp(32px, 5vw, 50px)', color: '#000000', maxWidth: '900px' }}
        >
          Strategic B2B SEO That{' '}
          <span style={{ color: '#FF610B' }}>Turns Search Intent</span>{' '}
          Into Qualified Business Opportunities
        </h2>

        {/* Paragraph */}
        <p
          className="font-body text-gray-600 leading-relaxed mb-10 mx-auto"
          style={{ fontSize: '18px', maxWidth: '680px' }}
        >
          Helping B2B companies capture high-intent search demand and turn organic
          traffic into qualified leads through strategic B2B search engine optimization.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Book Free SEO Strategy Call
          </Link>
          <Link href="/services" className="btn-outline">
            Explore B2B SEO Services
          </Link>
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="border-t border-gray-100 py-12 bg-white">
        <p className="text-center font-heading font-semibold text-navy text-lg mb-8 px-5">
          The Go-To SEO Partner for B2B Marketing Leaders Globally
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 px-8">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-3 border border-gray-200 rounded-lg bg-white hover:border-primary transition-colors duration-300"
              >
                <span className="font-heading font-bold text-gray-400 hover:text-primary text-base tracking-wide whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '150+', label: 'Clients Served' },
  { value: '4.8×', label: 'Avg. Traffic Growth' },
  { value: '92%', label: 'Client Retention Rate' },
  { value: '10+', label: 'Years of Expertise' },
]

function Stats() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-white mb-1">{value}</p>
              <p className="text-white/80 text-sm font-body">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About / Trust ─────────────────────────────────────────────────────────────

function About() {
  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/about-team.jpg"
                alt="CodeRenowned SEO team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-bold text-navy text-lg leading-none">4.8×</p>
                <p className="text-xs text-gray-500 font-body mt-0.5">Avg. Traffic Growth</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-5 leading-tight">
              The SEO Partner Built for B2B Growth
            </h2>
            <p className="text-gray-600 font-body leading-relaxed mb-5">
              CodeRenowned is a results-driven B2B SEO agency headquartered in Bangalore,
              India. We specialize in helping global brands, SaaS companies, and B2B
              businesses capture high-intent organic traffic and convert it into qualified pipeline.
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-8">
              Our team combines deep technical SEO expertise with cutting-edge AI tooling and
              Answer Engine Optimization (AEO) — so your brand doesn't just rank, it answers.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['AI-Powered SEO', 'AEO & SGE Ready', 'Content Authority', 'Technical Precision'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-body text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'B2B SEO Strategy',
    desc: 'Full-funnel SEO programs designed for long sales cycles, multiple decision-makers, and complex B2B buying journeys.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Technical SEO',
    desc: 'Core Web Vitals, crawlability, structured data, and site architecture — building a rock-solid technical foundation.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Content Strategy',
    desc: 'Research-led content that targets buyer intent, builds topical authority, and captures demand at every funnel stage.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Link Building',
    desc: 'White-hat digital PR and link acquisition strategies that build real domain authority and referral traffic.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI & AEO Optimization',
    desc: 'Optimize for AI overviews, SGE, and featured snippets — ensuring your brand shows up where answers are delivered.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local SEO',
    desc: 'Dominate local search results and Google Business Profile to capture high-intent buyers in your target markets.',
  },
]

function Services() {
  return (
    <section className="section-py bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">What We Do</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
            SEO Services That Drive Real Revenue
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="card group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-navy text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Industries ────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  'SaaS & Technology',
  'FinTech & BFSI',
  'Healthcare & Life Sciences',
  'Manufacturing & Industrial',
  'Professional Services',
  'E-commerce & Retail',
  'Real Estate & PropTech',
  'Education & EdTech',
]

function Industries() {
  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-label">Industries We Serve</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-5 leading-tight">
              Deep Expertise Across B2B Verticals
            </h2>
            <p className="text-gray-600 font-body leading-relaxed mb-8">
              We&apos;ve built SEO programs for businesses across a wide range of B2B industries,
              giving us the pattern recognition and vertical expertise to ramp faster and deliver
              results that matter.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-2.5 bg-gray-50 rounded-lg px-4 py-3 text-sm font-body text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {industry}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/industries.jpg"
                alt="Industries we serve"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Results CTA ───────────────────────────────────────────────────────────────

function ResultsCTA() {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-5 py-20 text-center">
        <span className="section-label">Our Results</span>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-5">
          Real Growth for Real Businesses
        </h2>
        <p className="text-white/60 font-body max-w-xl mx-auto mb-10">
          Don&apos;t take our word for it. Explore our case studies to see exactly how we&apos;ve
          helped brands like yours grow organic traffic and revenue.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/case-studies" className="btn-primary">
            View Case Studies
          </Link>
          <Link href="/contact" className="btn-ghost">
            Start Your Growth
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Blog Preview ──────────────────────────────────────────────────────────────

async function RecentPosts() {
  const posts = await getRecentBlogPosts(3)

  if (!posts.length) return null

  return (
    <section className="section-py bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label">Latest Insights</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy">
              From the Blog
            </h2>
          </div>
          <Link href="/blog" className="btn-outline hidden sm:inline-flex">
            All Posts
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="card flex flex-col">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4 -mx-6 -mt-6">
                <Image
                  src={getFeaturedImage(post)}
                  alt={post.title.rendered}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 font-body mb-2">{formatDate(post.date)}</p>
              <h3
                className="font-heading font-semibold text-navy mb-3 leading-snug line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="text-sm text-gray-500 font-body leading-relaxed line-clamp-3 mb-5 flex-1">
                {getExcerpt(post, 120)}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-heading font-semibold text-sm hover:underline mt-auto"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8 sm:hidden">
          <Link href="/blog" className="btn-outline">
            All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Industries />
      <ResultsCTA />
      <RecentPosts />
    </>
  )
}
