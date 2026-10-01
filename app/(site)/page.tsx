import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <section className="min-h-[85vh] flex items-end">
        <div className="wrap w-full pb-24 pt-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
            Geek Studio · Creative Technology
          </p>

          <h1 className="font-display font-extrabold text-[clamp(4rem,10vw,9rem)] tracking-[-0.055em] leading-[0.86] max-w-[10ch]">
            Technical precision.
            <br />
            Creative soul.
          </h1>

          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="text-lg leading-relaxed text-ink-60 max-w-[50ch]">
              We build brands, digital experiences, campaigns and visual
              systems for ambitious businesses across East Africa.
            </p>

            <Link
              href="/start-a-project"
              className="font-mono text-[11px] uppercase tracking-[0.18em] border-b border-current pb-2 hover:text-signal transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[--section-y]">
        <div className="wrap">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60">
                Capabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  Brand & Design
                </h2>
                <p className="mt-3 text-ink-60 leading-relaxed">
                  Identity systems, campaigns, graphics and visual direction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">
                  Digital
                </h2>
                <p className="mt-3 text-ink-60 leading-relaxed">
                  Websites, digital products, interfaces and technical
                  experiences.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">
                  Media
                </h2>
                <p className="mt-3 text-ink-60 leading-relaxed">
                  Photography, video production, aerial work and content.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">
                  Marketing
                </h2>
                <p className="mt-3 text-ink-60 leading-relaxed">
                  Social, campaigns, strategy and growth-focused creative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[--section-y] border-t border-ink-12">
        <div className="wrap">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
            Have something ambitious in mind?
          </p>

          <h2 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] tracking-[-0.05em] leading-[0.9] max-w-[10ch]">
            Let&apos;s make it real.
          </h2>

          <Link
            href="/start-a-project"
            className="inline-block mt-10 font-mono text-[11px] uppercase tracking-[0.18em] border-b border-current pb-2 hover:text-signal transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </main>
  )
}