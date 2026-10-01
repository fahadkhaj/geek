import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const required = ['name', 'email', 'brief']
  for (const k of required) {
    if (!body[k] || typeof body[k] !== 'string') {
      return NextResponse.json({ error: `Missing ${k}` }, { status: 400 })
    }
  }

  const email = String(body.email)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const payload = await getPayload({ config })

  try {
    await payload.create({
      collection: 'leads',
      data: {
        name: String(body.name),
        email,
        organisation: body.organisation ? String(body.organisation) : undefined,
        phone: body.phone ? String(body.phone) : undefined,
        capabilities: Array.isArray(body.capabilities)
          ? (body.capabilities as string[])
          : undefined,
        budget: body.budget ? String(body.budget) : undefined,
        timeline: body.timeline ? String(body.timeline) : undefined,
        brief: String(body.brief),
        stage: 'new',
      },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[inquiries]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}