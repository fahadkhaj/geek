import Link from 'next/link'
import { Mark } from '@/components/layout/Mark'
import { Reveal } from '@/components/motion/Reveal'

export function Opening() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Crop Mark — corner framing device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] text-ink-12 hidden lg:block"
      >
        <Mark className="w-full h-full" />
      </div>

      <div className="wrap flex-1 flex flex-col pt-36 pb-12">

        {/* Eyebrow row */}
        <Reveal>
          <div className="flex items-center justify-between">
            <p className="type-mono text-ink-60">Dar es Salaam · Est. 2021</p>
            <p className="type-mono text-ink-60 hidden md:block">Creative technology</p>
          </div>
        </Reveal>

        {/* The headline */}
        <div className="flex-1 flex items-center py-16">
          <h1 className="type-display max-w-[15ch]">
            <Reveal stagger as="span" className="block">
              <span className="block">We build</span>
              <span className="block">what should</span>
              <span className="block text-signal">exist.</span>
            </Reveal>
          </h1>
        </div>

        {/* Rule */}
        <Reveal>
          <div className="h-px w-full bg-ink-12" />
        </Reveal>

        {/* Bottom row */}
        <Reveal>
          <div className="pt-8 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-5">
              <p className="type-body-lg">
                GEEK is a creative-technology company. Studio, Media, Marketing,
                Growth, Labs — one system, built in Tanzania.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <Link
                href="/work"
                className="type-mono inline-flex items-center gap-3 text-ink hover:text-signal transition-colors duration-300"
              >
                <span>Selected work</span>
                <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}