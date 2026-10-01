import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Params = {
  params: Promise<{ slug: string }>
}

async function getProject(slug: string) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
    depth: 2,
  })

  return docs[0] ?? null
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.summary || undefined,
  }
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const heroUrl =
    project.hero && typeof project.hero === 'object'
      ? project.hero.url
      : null

  return (
    <article className="pt-32 pb-[--section-y]">
      <div className="wrap">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-6">
          {project.client && typeof project.client === 'object'
            ? project.client.name
            : 'Case study'}
        </p>

        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95] max-w-[16ch]">
          {project.title}
        </h1>

        {project.summary && (
          <p className="mt-8 text-lg text-ink-60 leading-relaxed max-w-[52ch]">
            {project.summary}
          </p>
        )}
      </div>

      {heroUrl && (
        <div className="mt-20 aspect-[16/9] relative bg-ink-12">
          <Image
            src={heroUrl}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {project.body && (
        <div className="wrap mt-20 max-w-[68ch] mx-auto">
          <RichText data={project.body} />
        </div>
      )}

      {project.credits && project.credits.length > 0 && (
        <div className="wrap mt-24 pt-12 border-t border-ink-12">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-60 mb-6">
            Credits
          </h2>

          <dl className="grid md:grid-cols-3 gap-y-6 gap-x-8">
            {project.credits.map(
              (credit: { role: string; name: string }, index: number) => (
                <div key={index}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-30">
                    {credit.role}
                  </dt>

                  <dd className="mt-1 font-display font-bold">
                    {credit.name}
                  </dd>
                </div>
              ),
            )}
          </dl>
        </div>
      )}
    </article>
  )
}