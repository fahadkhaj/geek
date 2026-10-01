export function Manifesto() {
  return (
    <section className="bg-void text-paper py-[--section-y]">
      <div className="wrap max-w-[42ch]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-10">
          Manifesto
        </p>

        <div className="space-y-6 text-[length:var(--t-h2)] leading-[1.15] font-display font-bold tracking-[-0.02em]">
          <p>We took it apart.</p>
          <p className="text-paper/60">That's where it started.</p>
          <p>
            Curiosity isn't a personality trait here. It's the method. We open things.
            We question the brief. We follow the detail until it tells us something the room didn't already know.
          </p>
          <p>
            We believe craft is not decoration. It's the difference between being seen and being remembered.
          </p>
          <p>
            We're from Dar es Salaam. We're not the version of Africa that gets sold back to us. We're the ones building.
          </p>
          <p className="text-signal">GEEK was here.</p>
        </div>
      </div>
    </section>
  )
}