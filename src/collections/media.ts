import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { useAsTitle: 'filename' },
  access: { read: () => true },
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'thumb', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 960, height: 720, position: 'centre' },
      { name: 'wide', width: 1920, height: 1080 },
      { name: 'hero', width: 2560 },
    ],
    adminThumbnail: 'thumb',
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
    { name: 'caption', type: 'text' },
    { name: 'credit', type: 'text' },
    {
      name: 'consent',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Model/property release on file?' },
    },
  ],
}