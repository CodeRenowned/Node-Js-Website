const WP_API = 'https://resources.coderenowned.com/wp-json/wp/v2'

export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  modified: string
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { sizes?: { medium?: { source_url: string }; large?: { source_url: string } } }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
    author?: Array<{ name: string; avatar_urls?: { [key: string]: string } }>
  }
  yoast_head_json?: {
    title?: string
    description?: string
    og_image?: Array<{ url: string }>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

// Generic fetch with error handling
async function wpFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${WP_API}${endpoint}`, {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
    headers: { 'Accept': 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} for ${endpoint}`)
  }

  return res.json()
}

// ─── Blog Posts ────────────────────────────────────────────────────────────────

export async function getBlogPosts(page = 1, perPage = 9): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const res = await fetch(
    `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&status=publish&categories_exclude=&orderby=date&order=desc`,
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) return { posts: [], total: 0, totalPages: 0 }

  const posts: WPPost[] = await res.json()
  const total = parseInt(res.headers.get('X-WP-Total') || '0')
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0')

  return { posts, total, totalPages }
}

export async function getBlogPost(slug: string): Promise<WPPost | null> {
  try {
    const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed&status=publish`)
    return posts[0] ?? null
  } catch {
    return null
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const posts = await wpFetch<WPPost[]>(`/posts?per_page=100&fields=slug&status=publish`)
    return posts.map((p) => p.slug)
  } catch {
    return []
  }
}

// ─── Case Studies ──────────────────────────────────────────────────────────────

export async function getCaseStudies(page = 1, perPage = 9): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  // Try custom post type first, fallback to posts with category
  const res = await fetch(
    `${WP_API}/case-studies?_embed&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`,
    { next: { revalidate: 3600 } }
  )

  if (res.ok) {
    const posts: WPPost[] = await res.json()
    const total = parseInt(res.headers.get('X-WP-Total') || '0')
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0')
    return { posts, total, totalPages }
  }

  // Fallback: posts with 'case-studies' category slug
  return getPostsByCategory('case-studies', page, perPage)
}

export async function getCaseStudy(slug: string): Promise<WPPost | null> {
  try {
    // Try CPT first
    const cpt = await fetch(`${WP_API}/case-studies?slug=${slug}&_embed&status=publish`, { next: { revalidate: 3600 } })
    if (cpt.ok) {
      const posts: WPPost[] = await cpt.json()
      if (posts.length > 0) return posts[0]
    }
    // Fallback to regular posts
    const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed&status=publish`)
    return posts[0] ?? null
  } catch {
    return null
  }
}

export async function getCaseStudySlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API}/case-studies?per_page=100&fields=slug&status=publish`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const posts: WPPost[] = await res.json()
      return posts.map((p) => p.slug)
    }
    return []
  } catch {
    return []
  }
}

// ─── Insights & Reports ────────────────────────────────────────────────────────

export async function getInsights(page = 1, perPage = 9): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const res = await fetch(
    `${WP_API}/insights?_embed&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`,
    { next: { revalidate: 3600 } }
  )

  if (res.ok) {
    const posts: WPPost[] = await res.json()
    const total = parseInt(res.headers.get('X-WP-Total') || '0')
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0')
    return { posts, total, totalPages }
  }

  return getPostsByCategory('insights-reports', page, perPage)
}

export async function getInsight(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API}/insights?slug=${slug}&_embed&status=publish`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const posts: WPPost[] = await res.json()
      if (posts.length > 0) return posts[0]
    }
    const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed&status=publish`)
    return posts[0] ?? null
  } catch {
    return null
  }
}

export async function getInsightSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${WP_API}/insights?per_page=100&fields=slug&status=publish`, { next: { revalidate: 3600 } })
    if (res.ok) {
      const posts: WPPost[] = await res.json()
      return posts.map((p) => p.slug)
    }
    return []
  } catch {
    return []
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

async function getPostsByCategory(categorySlug: string, page = 1, perPage = 9): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const categories = await wpFetch<WPCategory[]>(`/categories?slug=${categorySlug}`)
    if (!categories.length) return { posts: [], total: 0, totalPages: 0 }

    const catId = categories[0].id
    const res = await fetch(
      `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&categories=${catId}&status=publish`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) return { posts: [], total: 0, totalPages: 0 }

    const posts: WPPost[] = await res.json()
    const total = parseInt(res.headers.get('X-WP-Total') || '0')
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0')
    return { posts, total, totalPages }
  } catch {
    return { posts: [], total: 0, totalPages: 0 }
  }
}

export function getFeaturedImage(post: WPPost): string {
  return (
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/images/placeholder.jpg'
  )
}

export function getExcerpt(post: WPPost, length = 160): string {
  const raw = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
  return raw.length > length ? raw.slice(0, length).trimEnd() + '…' : raw
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function getRecentBlogPosts(count = 3): Promise<WPPost[]> {
  return wpFetch<WPPost[]>(`/posts?_embed&per_page=${count}&status=publish&orderby=date&order=desc`)
    .catch(() => [])
}
