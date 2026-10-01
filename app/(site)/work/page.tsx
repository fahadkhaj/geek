import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function WorkPage() {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    limit: 100,
    depth: 2,
  })

  return (
    <main className="pt-32 pb-[--section-y]">
      <div className="wrap">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-6">
            Work
          </p>

          <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95] max-w-[12ch]">
            Selected work
          </h1>
        </div>

        {projects.length === 0 ? (
          <p className="text-ink-60">
            No published projects yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
            {projects.map((project, i) => {
              const heroUrl =
                project.hero && typeof project.hero === 'object'
                  ? project.hero.url
                  : null

              return (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className={`group block ${
                    i % 3 === 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  {heroUrl ? (
                    <div className="overflow-hidden bg-ink-12 aspect-[4/3] relative">
                      <Image
                        src={heroUrl}
                        alt={
                          typeof project.hero === 'object' &&
                          project.hero?.alt
                            ? project.hero.alt
                            : project.title
                        }
                        fill
                        sizes={
                          i % 3 === 1
                            ? '(min-width: 768px) 100vw, 100vw'
                            : '(min-width: 768px) 50vw, 100vw'
                        }
                        className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-ink-12 flex items-center justify-center">
                      <span className="font-display font-bold text-xl">
                        {project.title}
                      </span>
                    </div>
                  )}

                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <h2 className="font-display font-bold text-[length:var(--t-h3)] tracking-[-0.01em]">
                      {project.title}
                    </h2>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-30 shrink-0">
                      {project.publishedAt
                        ? new Date(project.publishedAt).getFullYear()
                        : ''}
                    </span>
                  </div>

                  {project.client &&
                    typeof project.client === 'object' && (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60">
                        {project.client.name}
                      </p>
                    )}

                  {project.summary && (
                    <p className="mt-3 max-w-[52ch] text-ink-60 leading-relaxed">
                      {project.summary}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}