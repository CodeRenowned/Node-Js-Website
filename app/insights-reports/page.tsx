import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getInsights, getFeaturedImage, getExcerpt, formatDate } from '@/lib/wordpress'

export const metadata: Metadata = {
  title: 'Insights & Reports — B2B SEO Research',
  description: 'Deep-dive research, original data, and expert analysis on B2B SEO trends, industry benchmarks, and digital marketing strategies.',
}

interface PageProps {
  searchParams: { page?: string }
}

export default async function InsightsPage({ searchParams }: PageProps) {
  const currentPage = Math.max(1, parseInt(searchParams.page || '1'))
  const { posts, totalPages } = await getInsights(currentPage, 9)

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#1d1b4c] py-16">
        <div className="container mx-auto px-5 text-center">
          <span className="section-label">Insights & Reports</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-2">
            Research-Backed SEO Intelligence
          </h1>
          <p className="text-white/60 font-body mt-4 max-w-xl mx-auto">
            Original research, industry reports, and expert insights to help B2B leaders
            make smarter marketing decisions.
          </p>
        </div>
      </section>

      <section className="section-py bg-gray-50">
        <div className="container mx-auto px-5">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 font-body text-lg">Reports coming soon. Check back!</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <article key={post.id} className="card flex flex-col">
                    <Link href={`/insights-reports/${post.slug}`} className="block -mx-6 -mt-6 mb-4 aspect-video overflow-hidden rounded-t-xl bg-gray-100">
                      <Image
                        src={getFeaturedImage(post)}
                        alt={post.title.rendered}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <p className="text-xs text-gray-400 font-body mb-2">{formatDate(post.date)}</p>
                    <h2 className="font-heading font-semibold text-navy mb-3 leading-snug line-clamp-2">
                      <Link
                        href={`/insights-reports/${post.slug}`}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        className="hover:text-primary transition-colors"
                      />
                    </h2>
                    <p className="text-sm text-gray-500 font-body leading-relaxed line-clamp-3 flex-1 mb-5">
                      {getExcerpt(post, 130)}
                    </p>
                    <Link
                      href={`/insights-reports/${post.slug}`}
                      className="text-primary font-heading font-semibold text-sm hover:underline mt-auto"
                    >
                      Read Report →
                    </Link>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {currentPage > 1 && (
                    <Link href={`/insights-reports?page=${currentPage - 1}`} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-body text-gray-600 hover:border-primary hover:text-primary transition-colors">
                      ← Previous
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={`/insights-reports?page=${page}`}
                      className={`px-4 py-2 rounded-lg border text-sm font-body transition-colors ${page === currentPage ? 'bg-primary border-primary text-white' : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'}`}
                    >
                      {page}
                    </Link>
                  ))}
                  {currentPage < totalPages && (
                    <Link href={`/insights-reports?page=${currentPage + 1}`} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-body text-gray-600 hover:border-primary hover:text-primary transition-colors">
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
