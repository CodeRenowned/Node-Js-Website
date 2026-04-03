import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-5">
        <p className="text-8xl font-heading font-bold text-primary mb-4">404</p>
        <h1 className="text-3xl font-heading font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-gray-500 font-body mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
