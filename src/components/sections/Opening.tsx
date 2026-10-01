import Link from 'next/link'

export function Opening() {
  return (
    <section className="min-h-[92svh] flex flex-col justify-center pt-32 pb-16">
      <div className="wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Dar es Salaam · Est. 2021
        </p>

        <h1 className="font-display font-extrabold text-[length:var(--t-display-xl)] leading-[0.88] tracking-[-0.04em] max-w-[14ch]">
          We build what should exist.
        </h1>

        <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="max-w-[42ch] text-lg text-ink-60 leading-relaxed">
            GEEK is a creative-technology company. Studio, Media, Marketing, Growth, Labs —
            one system, built in Tanzania.
          </p>
          <Link
            href="/work"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink hover:text-signal transition-colors"
          >
            Scroll to explore ↓
          </Link>
        </div>
      </div>
    </section>
  )
}