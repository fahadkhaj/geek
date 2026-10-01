import { StartForm } from './StartForm'

export const metadata = { title: 'Start a project' }

export default function StartProject() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[48rem]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Start a project
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95]">
          Tell us what you're building.
        </h1>
        <p className="mt-8 text-lg text-ink-60 leading-relaxed max-w-[52ch]">
          We read every inquiry. If it's a fit, we'll be in touch within two business days.
        </p>

        <div className="mt-16">
          <StartForm />
        </div>
      </div>
    </div>
  )
}