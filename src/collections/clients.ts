import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: { useAsTitle: 'name' },
  access: {
    read: ({ req }) => !!req.user,
    create: ({ req }) =>
      ['super-admin', 'pm'].includes(req.user?.role ?? ''),
    update: ({ req }) =>
      ['super-admin', 'pm'].includes(req.user?.role ?? ''),
    delete: ({ req }) => req.user?.role === 'super-admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', unique: true, index: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'website', type: 'text' },
    { name: 'users', type: 'relationship', relationTo: 'users', hasMany: true },
    {
      name: 'notes',
      type: 'textarea',
      admin: { description: 'Internal only.' },
    },
  ],
}