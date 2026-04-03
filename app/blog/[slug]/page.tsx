import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPost, getBlogSlugs, getFeaturedImage, formatDate, getRecentBlogPosts } from '@/lib/wordpress'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
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

export default async function BlogPostPage({ params }: Props) {
  const [post, related] = await Promise.all([
    getBlogPost(params.slug),
    getRecentBlogPosts(3),
  ])

  if (!post) notFound()

  const image = getFeaturedImage(post)
  const author = post._embedded?.author?.[0]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <p className="text-xs text-white/50 font-body mb-3">{formatDate(post.date)}</p>
          <h1
            className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          {author && (
            <div className="flex items-center gap-3 mt-6">
              {author.avatar_urls?.['48'] && (
                <Image
                  src={author.avatar_urls['48']}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <p className="text-white/70 text-sm font-body">by {author.name}</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured image */}
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

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
            {/* Main content */}
            <div
              className="wp-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <p className="text-white font-heading font-bold text-lg mb-2">Ready to Grow?</p>
                <p className="text-white/80 text-sm font-body mb-5">Get a free SEO strategy session with our experts.</p>
                <Link href="/contact" className="btn-ghost w-full justify-center text-sm">
                  Book a Free Call
                </Link>
              </div>

              {/* Related Posts */}
              {related.filter((p) => p.slug !== params.slug).length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-navy mb-4">More Posts</h3>
                  <div className="space-y-4">
                    {related
                      .filter((p) => p.slug !== params.slug)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.id}
                          href={`/blog/${p.slug}`}
                          className="flex gap-3 group"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={getFeaturedImage(p)}
                              alt={p.title.rendered}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p
                              className="text-sm font-body text-gray-700 group-hover:text-primary transition-colors line-clamp-2 leading-snug"
                              dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                            />
                            <p className="text-xs text-gray-400 mt-1">{formatDate(p.date)}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
