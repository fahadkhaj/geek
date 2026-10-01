import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (!docs[0]) return {}
  return { title: docs[0].title, description: docs[0].excerpt }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })

  const article = docs[0]
  if (!article) notFound()

  return (
    <article className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[68ch] mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-60 mb-6">
          {article.category?.replace(/-/g, ' ') ?? 'Thinking'}
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95]">
          {article.title}
        </h1>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-30">
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : ''}
        </p>

        {article.body && (
          <div className="mt-12">
            <RichText data={article.body} />
          </div>
        )}
      </div>
    </article>
  )
}