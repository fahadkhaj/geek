import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: { tokenExpiration: 60 * 60 * 8 },
  admin: { useAsTitle: 'email' },
  access: {
    read: ({ req }) => !!req.user,
    create: ({ req }) => req.user?.role === 'super-admin',
    update: ({ req, id }) =>
      req.user?.role === 'super-admin' || req.user?.id === id,
    delete: ({ req }) => req.user?.role === 'super-admin',
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'team',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Content Admin', value: 'content-admin' },
        { label: 'Project Manager', value: 'pm' },
        { label: 'Team Member', value: 'team' },
        { label: 'Client', value: 'client' },
      ],
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      admin: { condition: (data) => data?.role === 'client' },
    },
  ],
}