import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://geekstudio.tz'),
  title: {
    default: 'GEEK — Creative technology from East Africa',
    template: '%s · GEEK',
  },
  description:
    'GEEK is a creative-technology company in Dar es Salaam. Studio, Media, Marketing, Growth, Labs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}