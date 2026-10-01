import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function FeaturedCase() {
  const payload = await getPayload({ config })

  let { docs } = await payload.find({
    collection: 'projects',
    where: {
      featured: { equals: true },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  if (!docs.length) {
    const fallback = await payload.find({
      collection: 'projects',
      where: {
        status: { equals: 'published' },
      },
      sort: '-publishedAt',
      limit: 1,
      depth: 2,
    })

    docs = fallback.docs
  }

  const project = docs[0]

  if (!project) return null

  // keep everything below this point exactly as it already is

  const heroUrl =
    project.hero && typeof project.hero === 'object' ? project.hero.url : null

  return (
    <section className="py-[--section-y] bg-paper">
      <div className="wrap">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-60 mb-10">
          Featured
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95]">
              {project.title}
            </h2>

            {project.summary && (
              <p className="mt-8 text-lg text-ink-60 leading-relaxed max-w-[46ch]">
                {project.summary}
              </p>
            )}

            <Link
              href={`/work/${project.slug}`}
              className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.18em] border-b border-ink pb-1 hover:text-signal hover:border-signal transition-colors"
            >
              Read the case study →
            </Link>
          </div>

          {heroUrl && (
            <div className="aspect-[4/5] overflow-hidden bg-ink-12 relative">
              <Image
                src={heroUrl}
                alt={
                  typeof project.hero === 'object' && project.hero?.alt
                    ? project.hero.alt
                    : project.title
                }
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}