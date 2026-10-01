import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-[--section-y] bg-signal text-white">
      <div className="wrap">
        <h2 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95] max-w-[16ch]">
          Let's build what should exist.
        </h2>

        <div className="mt-12">
          <Link
            href="/start-a-project"
            className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] border border-white px-6 py-3.5 hover:bg-white hover:text-signal transition-colors duration-300"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}