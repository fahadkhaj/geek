export const metadata = { title: 'Data Request' }

export default function DataRequest() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[68ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Legal
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-h1)] tracking-[-0.02em] leading-[1.05]">
          Data Request
        </h1>
        <div className="mt-12 text-ink-60 leading-relaxed space-y-4">
          <p>
            To request access to, correction of, or deletion of personal data we hold
            about you, email{' '}
            <a href="mailto:privacy@geekstudio.tz" className="underline">
              privacy@geekstudio.tz
            </a>
            . We respond within 30 days.
          </p>
        </div>
      </div>
    </div>
  )
}