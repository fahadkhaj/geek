import type { CollectionConfig } from 'payload'
import { notifyNewLead } from '@/lib/notify'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'stage', 'createdAt'],
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'super-admin',
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== 'create') return doc

        await notifyNewLead({
          name: doc.name,
          email: doc.email,
          organisation: doc.organisation ?? undefined,
          phone: doc.phone ?? undefined,
          budget: doc.budget ?? undefined,
          timeline: doc.timeline ?? undefined,
          brief: doc.brief,
          capabilities: doc.capabilities ?? undefined,
        })

        return doc
      },
    ],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'organisation', type: 'text' },
    { name: 'phone', type: 'text' },
    {
      name: 'capabilities',
      type: 'select',
      hasMany: true,
      options: ['studio', 'media', 'marketing', 'growth', 'labs'],
    },
    {
      name: 'budget',
      type: 'select',
      options: ['under-5m', '5-15m', '15-50m', '50m-plus', 'unsure'],
    },
    {
      name: 'timeline',
      type: 'select',
      options: ['asap', '1-3-months', '3-6-months', 'exploring'],
    },
    { name: 'brief', type: 'textarea', required: true },
    {
      name: 'stage',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'qualified', 'proposal', 'won', 'lost'],
    },
    { name: 'owner', type: 'relationship', relationTo: 'users' },
  ],
}
