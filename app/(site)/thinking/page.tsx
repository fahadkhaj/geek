import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata = { title: 'Thinking' }

export default async function ThinkingIndex() {
  const payload = await getPayload({ config })
  const { docs: articles } = await payload.find({
    collection: 'articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    depth: 2,
  })

  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Thinking
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95] max-w-[14ch]">
          Notes from the work.
        </h1>

        {articles.length === 0 ? (
          <p className="mt-20 text-ink-60">Nothing published yet.</p>
        ) : (
          <ul className="mt-20 divide-y divide-ink-12 border-y border-ink-12">
            {articles.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/thinking/${a.slug}`}
                  className="group grid md:grid-cols-[10rem_1fr_auto] gap-6 items-baseline py-8 hover:bg-signal-dim transition-colors duration-300"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-30">
                    {a.publishedAt
                      ? new Date(a.publishedAt).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'short',
                        })
                      : ''}
                  </span>
                  <span className="font-display font-bold text-[length:var(--t-h3)] group-hover:text-signal transition-colors">
                    {a.title}
                  </span>
                  <span className="font-mono text-[11px] text-ink-30 group-hover:text-signal">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}