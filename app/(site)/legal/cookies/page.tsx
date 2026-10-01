export const metadata = { title: 'Cookies' }

export default function Cookies() {
  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[68ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Legal
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-h1)] tracking-[-0.02em] leading-[1.05]">
          Cookies
        </h1>
        <div className="mt-12 text-ink-60 leading-relaxed space-y-4">
          <p>
            GEEK uses only essential cookies for authentication and session management.
            We do not use advertising cookies. Placeholder — replace with a policy
            reviewed by a qualified Tanzanian lawyer before launch.
          </p>
        </div>
      </div>
    </div>
  )
}