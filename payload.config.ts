import { buildConfig } from 'payload'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from '@/collections/users'
import { Clients } from '@/collections/clients'
import { Media } from '@/collections/media'
import { Projects } from '@/collections/projects'
import { Articles } from '@/collections/articles'
import { Leads } from '@/collections/leads'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,

    meta: {
      titleSuffix: ' · GEEK Control Center',
      icons: [
        {
          rel: 'icon',
          url: '/favicon.ico',
        },
      ],
    },

    components: {
      graphics: {
        Logo: '/src/components/admin/BrandLogo#BrandLogo',
        Icon: '/src/components/admin/BrandIcon#BrandIcon',
      },

      beforeDashboard: [
        '/src/components/admin/BeforeDashboard#BeforeDashboard',
      ],
    },
  },

  bin: [
    {
      key: 'seed-articles',
      scriptPath: path.resolve(
        dirname,
        'scripts/seed-articles.ts',
      ),
    },
  ],

  collections: [
    Users,
    Clients,
    Media,
    Projects,
    Articles,
    Leads,
  ],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(
      dirname,
      'payload-types.ts',
    ),
  },

  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URI || '',
    },
  }),

  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'public',
        },
      },

      bucket: process.env.S3_BUCKET || '',

      config: {
        endpoint: process.env.S3_ENDPOINT || '',
        region: process.env.S3_REGION || 'auto',

        credentials: {
          accessKeyId:
            process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey:
            process.env.S3_SECRET_ACCESS_KEY || '',
        },
      },
    }),
  ],
})