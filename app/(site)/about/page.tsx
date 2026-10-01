export const metadata = { title: 'About' }

export default function About() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[64ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          About
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95]">
          A creative-technology company, built in Tanzania.
        </h1>

        <div className="mt-16 space-y-6 text-[length:var(--t-body-lg)] leading-relaxed text-ink-60">
          <p>
            GEEK is a creative-technology company based in Dar es Salaam. We work across
            brand, media, marketing, growth, and technology — under one roof, on one system.
          </p>
          <p>
            We were founded in 2021 on a simple idea: the infrastructure that African
            businesses need to compete globally shouldn't be purchased in pieces.
          </p>
          <p>
            Our work is grounded in craft. Our method is curiosity. Our ambition is to
            build the kind of company that could only be from here.
          </p>
        </div>
      </div>
    </div>
  )
}