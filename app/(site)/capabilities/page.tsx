import Link from 'next/link'

export const metadata = { title: 'Capabilities' }

const capabilities = [
  { slug: 'studio', n: '01', name: 'Studio', line: 'Brand, identity, creative direction, campaigns.' },
  { slug: 'media', n: '02', name: 'Media', line: 'Photography, film, drone, production.' },
  { slug: 'marketing', n: '03', name: 'Marketing', line: 'Social, content, campaigns, communication.' },
  { slug: 'growth', n: '04', name: 'Growth', line: 'Acquisition, performance, conversion, analytics.' },
  { slug: 'labs', n: '05', name: 'Labs', line: 'Web, digital products, AI, automation, experiments.' },
]

export default function CapabilitiesPage() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Capabilities
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95] max-w-[14ch]">
          Five capabilities. One system.
        </h1>

        <ul className="mt-20 divide-y divide-ink-12 border-y border-ink-12">
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
                <span className="font-mono text-[11px] text-ink-30 group-hover:text-signal">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}