export const metadata = { title: 'Privacy' }

export default function Privacy() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[68ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Legal
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-h1)] tracking-[-0.02em] leading-[1.05]">
          Privacy Policy
        </h1>
        <div className="mt-12 prose prose-ink max-w-none text-ink-60 leading-relaxed space-y-4">
          <p>
            This Privacy Policy is a placeholder. Replace with a policy reviewed by a
            qualified Tanzanian lawyer before launch.
          </p>
          <p>
            GEEK collects only the information necessary to respond to inquiries and
            deliver our services. We do not sell personal data. We do not use
            third-party advertising trackers.
          </p>
        </div>
      </div>
    </div>
  )
}