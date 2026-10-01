import { notFound } from 'next/navigation'

const data: Record<string, { name: string; line: string; body: string }> = {
  studio: {
    name: 'Studio',
    line: 'Brand, identity, creative direction, campaigns.',
    body: 'We build brand systems that hold up across every touchpoint — from the mark itself to the tone of a caption. Identity work here is strategy first, form second.',
  },
  media: {
    name: 'Media',
    line: 'Photography, film, drone, production.',
    body: 'Production with a cinematographer\u2019s eye and an editor\u2019s ear. Ground, aerial, studio, on-location. We shoot to last.',
  },
  marketing: {
    name: 'Marketing',
    line: 'Social, content, campaigns, communication.',
    body: 'Marketing execution with the same craft as the brand work it serves. Content, campaigns, community, communication.',
  },
  growth: {
    name: 'Growth',
    line: 'Acquisition, performance, conversion, analytics.',
    body: 'Performance and acquisition — the measurable side of brand. We build growth systems that compound.',
  },
  labs: {
    name: 'Labs',
    line: 'Web, digital products, AI, automation, experiments.',
    body: 'Where the studio tests what comes next. Web, digital products, AI, automation, and experiments that sometimes become products.',
  },
}

type Params = { params: Promise<{ capability: string }> }

export async function generateMetadata({ params }: Params) {
  const { capability } = await params
  const d = data[capability]
  if (!d) return {}
  return { title: d.name }
}

export default async function CapabilityPage({ params }: Params) {
  const { capability } = await params
  const d = data[capability]
  if (!d) notFound()

  return (
    <div className="pt-32 pb-[--section-y]">
      <div className="wrap max-w-[64ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-60 mb-8">
          Capability
        </p>
        <h1 className="font-display font-extrabold text-[length:var(--t-display-l)] tracking-[-0.03em] leading-[0.95]">
          {d.name}
        </h1>
        <p className="mt-6 text-lg text-ink-60">{d.line}</p>
        <p className="mt-12 text-[length:var(--t-body-lg)] leading-relaxed">{d.body}</p>
      </div>
    </div>
  )
}