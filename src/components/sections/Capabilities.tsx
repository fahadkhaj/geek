import Link from 'next/link'

const capabilities = [
  { slug: 'studio', n: '01', name: 'Studio', line: 'Brand, identity, creative direction, campaigns.' },
  { slug: 'media', n: '02', name: 'Media', line: 'Photography, film, drone, production.' },
  { slug: 'marketing', n: '03', name: 'Marketing', line: 'Social, content, campaigns, communication.' },
  { slug: 'growth', n: '04', name: 'Growth', line: 'Acquisition, performance, conversion, analytics.' },
  { slug: 'labs', n: '05', name: 'Labs', line: 'Web, digital products, AI, automation, experiments.' },
]

export function Capabilities() {
  return (
    <section className="py-[--section-y] border-t border-ink-12">
      <div className="wrap">
        <h2 className="font-display font-bold text-[length:var(--t-h1)] tracking-[-0.02em] mb-16">
          What we do
        </h2>

        <ul className="divide-y divide-ink-12 border-y border-ink-12">
          {capabilities.map(({ slug, n, name, line }) => (
            <li key={slug}>
              <Link
                href={`/capabilities/${slug}`}
                className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_1fr_2fr_auto] gap-6 items-baseline py-8 hover:bg-signal-dim transition-colors duration-300"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink-30">
                  {n}
                </span>
                <span className="font-display font-bold text-[length:var(--t-h2)] tracking-[-0.02em]">
                  {name}
                </span>
                <span className="hidden md:block text-ink-60">{line}</span>
                <span className="font-mono text-[11px] text-ink-30 group-hover:text-signal transition-colors">
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