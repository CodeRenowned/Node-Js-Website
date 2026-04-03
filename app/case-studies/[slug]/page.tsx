import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudy, getCaseStudySlugs, getFeaturedImage, formatDate } from '@/lib/wordpress'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getCaseStudy(params.slug)
  if (!post) return {}
  const yoast = post.yoast_head_json
  const image = getFeaturedImage(post)
  return {
    title: yoast?.title || post.title.rendered,
    description: yoast?.description || '',
    openGraph: {
      images: yoast?.og_image?.[0]?.url ? [yoast.og_image[0].url] : image ? [image] : [],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const post = await getCaseStudy(params.slug)
  if (!post) notFound()

  const image = getFeaturedImage(post)

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            ← All Case Studies
          </Link>
          <span className="section-label">Case Study</span>
          <h1
            className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mt-2"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-white/50 text-sm font-body mt-4">{formatDate(post.date)}</p>
        </div>
      </section>

      {image && image !== '/images/placeholder.jpg' && (
        <div className="container mx-auto px-5 max-w-4xl -mt-8 mb-0 z-10 relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={image}
              alt={post.title.rendered}
              width={896}
              height={504}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      <section className="section-py bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
            <div
              className="wp-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <aside className="space-y-6">
              <div className="bg-primary rounded-2xl p-6 text-center">
                <p className="text-white font-heading font-bold text-lg mb-2">Want Similar Results?</p>
                <p className="text-white/80 text-sm font-body mb-5">Let&apos;s build your SEO growth engine together.</p>
                <Link href="/contact" className="btn-ghost w-full justify-center text-sm">
                  Get a Free Audit
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-navy mb-3 text-sm">Explore More</h3>
                <div className="space-y-2">
                  <Link href="/case-studies" className="block text-sm font-body text-gray-600 hover:text-primary transition-colors">← All Case Studies</Link>
                  <Link href="/blog" className="block text-sm font-body text-gray-600 hover:text-primary transition-colors">Read Our Blog</Link>
                  <Link href="/insights-reports" className="block text-sm font-body text-gray-600 hover:text-primary transition-colors">Insights & Reports</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
