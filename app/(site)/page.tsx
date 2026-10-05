import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

type Project = {
  id: string | number
  title: string
  slug: string
  featured?: boolean | null
  publishedAt?: string | null
  hero?: { url?: string | null; alt?: string | null } | string | number | null
  client?: { name?: string | null } | string | number | null
}

type Article = {
  id: string | number
  title: string
  slug: string
  excerpt?: string | null
  category?: string | null
  readTime?: number | null
  publishedAt?: string | null
}

const SERVICES = [
  {
    n: '01',
    name: 'Studio',
    line: 'Brand systems, identity, creative direction.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80',
  },
  {
    n: '02',
    name: 'Media',
    line: 'Film, photography, drone, production.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80',
  },
  {
    n: '03',
    name: 'Marketing',
    line: 'Social, communications, paid media.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=80',
  },
  {
    n: '04',
    name: 'Labs',
    line: 'Web, digital products, AI, automation.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80',
  },
]

const FALLBACK_ARTICLES = [
  { cat: 'Report', title: 'Unlocking high-value users with machine learning', read: 2 },
  { cat: 'Blog Post', title: 'Why your brand strategy hinges on a living design system', read: 5 },
  { cat: 'Blog Post', title: 'Inside East African creative technology in 2026', read: 5 },
  { cat: 'Blog Post', title: 'Driving experimentation and AI innovation for African brands', read: 5 },
  { cat: 'Blog Post', title: 'Experience centres: where brands come to life', read: 6 },
  { cat: 'Blog Post', title: 'Smarter investments for an evolving marketing landscape', read: 7 },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default async function HomePage() {
  let projects: Project[] = []
  let articles: Article[] = []

  try {
    const payload = await getPayload({ config })
    const [projResult, artResult] = await Promise.all([
      payload.find({
        collection: 'projects',
        where: { status: { equals: 'published' } },
        sort: '-publishedAt',
        limit: 6,
        depth: 2,
      }),
      payload.find({
        collection: 'articles',
        where: { status: { equals: 'published' } },
        sort: '-publishedAt',
        limit: 6,
        depth: 1,
      }).catch(() => ({ docs: [] as Article[] })),
    ])
    projects = projResult.docs as unknown as Project[]
    articles = (artResult.docs as unknown as Article[]) ?? []
  } catch (err) {
    console.error('[homepage] load failed', err)
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero-monks">
        <div className="wrap">
          <h1 className="hero-monks-headline">
            Your trusted partner for <em>creative technology</em> across Africa and beyond:
          </h1>

          <div className="hero-monks-meta">
            <span className="type-mono">Dar es Salaam · Tanzania</span>
            <span className="type-mono">Studio · Media · Marketing · Growth · Labs</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES 01–04 ───────────────────────── */}
      <section className="services-monks">
        <div className="wrap">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <Link key={s.n} href="/capabilities" className="svc-card">
                <span className="svc-num" aria-hidden="true">{s.n}</span>
                <div className="svc-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.name} loading="lazy" />
                </div>
                <p className="svc-label">Services</p>
                <div className="svc-title-row">
                  <h3 className="svc-title">{s.name}</h3>
                  <span className="svc-arrow"><ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK GRID ────────────────────────────── */}
      <section className="work-monks">
        <div className="wrap">
          <div className="section-head-monks">
            <h2 className="type-h1">Selected work</h2>
            <Link href="/work" className="type-mono" style={{ color: 'var(--color-muted)' }}>
              All work →
            </Link>
          </div>

          {projects.length === 0 ? (
            <p style={{ color: 'var(--color-muted)', padding: '32px 0' }}>
              No projects published yet. Add one in{' '}
              <a href="/admin" style={{ textDecoration: 'underline', color: 'var(--color-signal)' }}>/admin</a>.
            </p>
          ) : (
            <div className="work-grid-monks">
              {projects.map((p) => {
                const hero = p.hero && typeof p.hero === 'object' ? p.hero : null
                const client = p.client && typeof p.client === 'object' ? p.client : null
                const year = p.publishedAt ? new Date(p.publishedAt).getFullYear() : ''
                return (
                  <Link key={p.id} href={`/work/${p.slug}`} className="work-card">
                    <div className="work-card-media">
                      {hero?.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={hero.url} alt={hero.alt || p.title} loading="lazy" />
                      ) : null}
                    </div>
                    <div className="work-card-meta">
                      <span className="type-mono">{client?.name ?? 'GEEK'}</span>
                      <span className="type-mono">{year}</span>
                    </div>
                    <h3 className="work-card-title">{p.title}</h3>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── ON OUR MINDS ─────────────────────────── */}
      <section className="minds-monks">
        <div className="wrap">
          <h2 className="minds-title">On our minds</h2>

          <div className="minds-list">
            {articles.length > 0
              ? articles.map((a) => (
                  <Link key={a.id} href={`/thinking/${a.slug}`} className="mind-row">
                    <span className="mind-cat">{a.category ?? 'Blog Post'}</span>
                    <span className="mind-title">
                      <strong>{a.title}</strong>
                    </span>
                    <span className="mind-read">{a.readTime ?? 5} min read</span>
                    <span className="mind-actions">
                      <span className="btn-read">Read now</span>
                      <span className="btn-circle" aria-hidden="true"><ArrowIcon /></span>
                    </span>
                  </Link>
                ))
              : FALLBACK_ARTICLES.map((a, i) => (
                  <Link key={i} href="/thinking" className="mind-row">
                    <span className="mind-cat">{a.cat}</span>
                    <span className="mind-title"><strong>{a.title}</strong></span>
                    <span className="mind-read">{a.read} min read</span>
                    <span className="mind-actions">
                      <span className="btn-read">Read now</span>
                      <span className="btn-circle" aria-hidden="true"><ArrowIcon /></span>
                    </span>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="cta-monks">
        <div className="wrap">
          <div className="cta-monks-grid">
            <h2 className="cta-monks-title">Make something impossible to ignore.</h2>
            <div className="cta-monks-actions">
              <Link href="/start-a-project" className="btn-white">Start a project</Link>
              <Link href="/work" className="btn-white outline">See the work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}