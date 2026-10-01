import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function Thinking() {
  const payload = await getPayload({ config })
  const { docs: articles } = await payload.find({
    collection: 'articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 3,
  })

  if (articles.length === 0) return null

  return (
    <section className="py-[--section-y] border-t border-ink-12">
      <div className="wrap">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display font-bold text-[length:var(--t-h1)] tracking-[-0.02em]">
            Thinking
          </h2>
          <Link
            href="/thinking"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-60 hover:text-signal transition-colors"
          >
            All articles →
          </Link>
        </div>

        <ul className="divide-y divide-ink-12">
          {articles.map((a) => (
            <li key={a.id}>
              <Link
                href={`/thinking/${a.slug}`}
                className="group grid md:grid-cols-[1fr_2fr_auto] gap-6 items-baseline py-8 hover:bg-signal-dim transition-colors duration-300"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-30">
                  {a.publishedAt
                    ? new Date(a.publishedAt).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                      })
                    : ''}
                </span>
                <span className="font-display font-bold text-[length:var(--t-h3)] tracking-[-0.01em] group-hover:text-signal transition-colors">
                  {a.title}
                </span>
                <span className="font-mono text-[11px] text-ink-30 group-hover:text-signal">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}