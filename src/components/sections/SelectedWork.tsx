import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function SelectedWork() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 6,
    depth: 2,
  })

  if (projects.length === 0) return null

  return (
    <section className="py-[--section-y]">
      <div className="wrap">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display font-bold text-[length:var(--t-h1)] tracking-[-0.02em]">
            Selected work
          </h2>
          <Link
            href="/work"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-60 hover:text-signal transition-colors"
          >
            All work →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((p, i) => {
            const heroUrl =
              p.hero && typeof p.hero === 'object' ? p.hero.url : null
            return (
              <Link
                key={p.id}
                href={`/work/${p.slug}`}
                className={`group block ${i % 3 === 1 ? 'md:col-span-2' : ''}`}
              >
                {heroUrl && (
                  <div className="overflow-hidden bg-ink-12 aspect-[4/3] relative">
                    <Image
                      src={heroUrl}
                      alt={
                        typeof p.hero === 'object' && p.hero?.alt
                          ? p.hero.alt
                          : p.title
                      }
                      fill
                      sizes={
                        i % 3 === 1
                          ? '(min-width: 768px) 100vw, 100vw'
                          : '(min-width: 768px) 50vw, 100vw'
                      }
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="font-display font-bold text-[length:var(--t-h3)] tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-30 shrink-0">
                    {p.publishedAt
                      ? new Date(p.publishedAt).getFullYear()
                      : ''}
                  </span>
                </div>
                {p.client && typeof p.client === 'object' && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60">
                    {p.client.name}
                  </p>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}