export const metadata = { title: 'Dashboard' }

const PROJECTS = [
  { name: 'NMB — Branch of the future', stage: 'In review', pct: 72, due: '14 Oct' },
  { name: 'Tigo — Festive campaign', stage: 'Production', pct: 45, due: '02 Nov' },
  { name: 'CRDB — Brand refresh', stage: 'Discovery', pct: 18, due: '20 Nov' },
]

const FILES = [
  { name: 'NMB — Logo pack.zip', size: '12.4 MB', at: '2 hours ago' },
  { name: 'Tigo — Storyboard v3.pdf', size: '3.1 MB', at: 'Yesterday' },
  { name: 'CRDB — Strategy deck.pdf', size: '8.7 MB', at: '4 days ago' },
]

export default function PortalDashboard() {
  return (
    <div style={{ minHeight: '100svh', position: 'relative', overflow: 'hidden', background: 'var(--color-paper)' }}>
      {/* Ambient blobs behind the glass */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: '60vw', height: '60vw',
        top: '-15vw', left: '-10vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,74,22,.22), transparent 60%)',
        filter: 'blur(20px)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', width: '55vw', height: '55vw',
        bottom: '-20vw', right: '-15vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(10,10,10,.14), transparent 60%)',
        filter: 'blur(30px)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: '9rem', paddingBottom: '6rem' }}>
        <p className="type-mono" style={{ color: 'var(--color-muted)', marginBottom: 12 }}>
          Client portal · GEEK
        </p>
        <h1
          className="type-h1"
          style={{ marginBottom: 48, maxWidth: '16ch' }}
        >
          Welcome back.
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 22,
        }}>
          {/* Stats card */}
          <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
            <p className="type-mono" style={{ color: 'var(--color-muted)', marginBottom: 12 }}>
              Active projects
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, letterSpacing: '-.05em' }}>
              03
            </p>
          </div>

          <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
            <p className="type-mono" style={{ color: 'var(--color-muted)', marginBottom: 12 }}>
              Files shared
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, letterSpacing: '-.05em' }}>
              128
            </p>
          </div>

          <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
            <p className="type-mono" style={{ color: 'var(--color-muted)', marginBottom: 12 }}>
              Open approvals
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, letterSpacing: '-.05em', color: 'var(--color-signal)' }}>
              02
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 22,
          marginTop: 22,
        }} className="portal-split">
          {/* Projects */}
          <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-.04em' }}>
                Projects
              </h2>
              <span className="type-mono" style={{ color: 'var(--color-muted)' }}>3 active</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {PROJECTS.map((p) => (
                <li key={p.name} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  alignItems: 'center',
                  gap: 18,
                  padding: '16px 14px',
                  borderRadius: 16,
                  transition: 'background .3s ease',
                }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{p.name}</p>
                    <p className="type-mono" style={{ color: 'var(--color-muted)' }}>{p.stage}</p>
                  </div>
                  <div style={{ minWidth: 120 }}>
                    <div style={{
                      height: 4, borderRadius: 999,
                      background: 'rgba(10,10,10,.08)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%', width: `${p.pct}%`,
                        background: 'var(--color-signal)',
                        borderRadius: 999,
                      }} />
                    </div>
                    <p className="type-mono" style={{ marginTop: 8, color: 'var(--color-muted)' }}>
                      {p.pct}% · due {p.due}
                    </p>
                  </div>
                  <span className="type-mono" style={{ color: 'var(--color-signal)' }}>→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Files */}
          <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-.04em' }}>
                Recent files
              </h2>
              <span className="type-mono" style={{ color: 'var(--color-muted)' }}>Latest</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {FILES.map((f) => (
                <li key={f.name} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  alignItems: 'center',
                  gap: 18,
                  padding: '14px 14px',
                  borderRadius: 14,
                  borderBottom: '1px solid rgba(10,10,10,.06)',
                }}>
                  <span style={{ fontSize: 15 }}>{f.name}</span>
                  <span className="type-mono" style={{ color: 'var(--color-muted)' }}>{f.size}</span>
                  <span className="type-mono" style={{ color: 'var(--color-muted)' }}>{f.at}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .portal-split { grid-template-columns: 6fr 4fr !important; }
        }
      `}</style>
    </div>
  )
}