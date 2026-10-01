import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'GEEK — Creative technology from East Africa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F6F5F2',
          color: '#0A0A0A',
          padding: '80px',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
            <g stroke="#0A0A0A" strokeWidth="8" strokeLinecap="butt">
              <path d="M14 34 V14 H34" />
              <path d="M66 14 H86 V34" />
              <path d="M86 66 V86 H66" />
              <path d="M34 86 H14 V66" />
            </g>
          </svg>
          <span
            style={{
              fontSize: 20,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#5C5C5C',
            }}
          >
            Dar es Salaam
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            We build what should exist.
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#5C5C5C',
              maxWidth: '760px',
            }}
          >
            GEEK is a creative-technology company. Studio, Media, Marketing, Growth, Labs.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#5C5C5C',
          }}
        >
          <span>geekstudio.tz</span>
          <span
            style={{
              background: '#FF3D14',
              color: '#fff',
              padding: '10px 20px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            GEEK
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}