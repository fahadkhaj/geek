import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: ({ req }) =>
      req.user ? true : { status: { equals: 'published' } },
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Behind the Build', value: 'behind-the-build' },
        { label: 'Field Notes', value: 'field-notes' },
        { label: 'Experiments', value: 'experiments' },
        { label: 'Case Stories', value: 'case-stories' },
        { label: 'Ideas', value: 'ideas' },
        { label: 'Journal', value: 'journal' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: ['draft', 'in-review', 'published', 'archived'],
    },
    { name: 'hero', type: 'upload', relationTo: 'media' },
    { name: 'excerpt', type: 'textarea', maxLength: 240 },
    { name: 'body', type: 'richText' },
    { name: 'author', type: 'relationship', relationTo: 'users' },
    { name: 'publishedAt', type: 'date' },
  ],
}