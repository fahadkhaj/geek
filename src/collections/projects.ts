import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'status', 'updatedAt'],
  },
  access: {
    read: ({ req }) =>
      req.user ? true : { status: { equals: 'published' } },
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'client', type: 'relationship', relationTo: 'clients' },
    {
      name: 'capabilities',
      type: 'select',
      hasMany: true,
      options: ['studio', 'media', 'marketing', 'growth', 'labs'],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: ['draft', 'in-review', 'published', 'archived'],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'hero', type: 'upload', relationTo: 'media' },
    { name: 'summary', type: 'textarea', maxLength: 240 },
    { name: 'body', type: 'richText' },
    {
      name: 'credits',
      type: 'array',
      fields: [
        { name: 'role', type: 'text' },
        { name: 'name', type: 'text' },
      ],
    },
    { name: 'publishedAt', type: 'date' },
  ],
}