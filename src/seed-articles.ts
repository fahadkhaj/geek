import { getPayload } from 'payload'
import config from '@payload-config'

const articles = [
  {
    title: 'Why craft still wins in a feed-scrolled world',
    slug: 'why-craft-still-wins',
    excerpt:
      'Attention is cheap. Being remembered is not. A note on why we still sweat the details.',
    status: 'published' as const,
    publishedAt: new Date().toISOString(),
  },
  {
    title: 'Building in Dar: what Silicon Valley gets wrong',
    slug: 'building-in-dar',
    excerpt:
      'The playbook from abroad assumes infrastructure that does not exist here. Here is what we do instead.',
    status: 'published' as const,
    publishedAt: new Date(
      Date.now() - 86400000 * 14,
    ).toISOString(),
  },
  {
    title: 'Brand systems, not brand assets',
    slug: 'brand-systems-not-assets',
    excerpt:
      'A logo is not a brand. A system is. Here is how we think about identity.',
    status: 'published' as const,
    publishedAt: new Date(
      Date.now() - 86400000 * 30,
    ).toISOString(),
  },
]

const seed = async () => {
  const payload = await getPayload({ config })

  for (const article of articles) {
    const existing = await payload.find({
      collection: 'articles',
      where: {
        slug: {
          equals: article.slug,
        },
      },
      limit: 1,
    })

    if (existing.docs.length) {
      console.log(`skip: ${article.slug}`)
      continue
    }

    await payload.create({
      collection: 'articles',
      data: article,
    })

    console.log(`created: ${article.slug}`)
  }

  console.log('Article seed complete.')
}

seed()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('Article seed failed:', error)
    process.exit(1)
  })