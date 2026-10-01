import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const TO = process.env.LEAD_NOTIFY_TO ?? 'info@geekstudio.tz'
const FROM = process.env.LEAD_NOTIFY_FROM ?? 'hello@geekstudio.tz'

type Lead = {
  name: string
  email: string
  organisation?: string
  phone?: string
  budget?: string
  timeline?: string
  brief: string
  capabilities?: string[]
}

export async function notifyNewLead(lead: Lead) {
  if (!resend) {
    console.warn('[notify] RESEND_API_KEY missing — skipping')
    return
  }

  const caps = lead.capabilities?.length
    ? lead.capabilities.join(', ')
    : '—'

  try {
    await resend.emails.send({
      from: `GEEK Leads <${FROM}>`,
      to: TO,
      replyTo: lead.email,
      subject: `New brief — ${lead.name}${lead.organisation ? ` (${lead.organisation})` : ''}`,
      text: [
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Organisation: ${lead.organisation ?? '—'}`,
        `Phone: ${lead.phone ?? '—'}`,
        `Capabilities: ${caps}`,
        `Budget: ${lead.budget ?? '—'}`,
        `Timeline: ${lead.timeline ?? '—'}`,
        '',
        'Brief:',
        lead.brief,
        '',
        `View in admin: ${process.env.NEXT_PUBLIC_SITE_URL}/admin/collections/leads`,
      ].join('\n'),
    })
  } catch (err) {
    console.error('[notify] failed', err)
  }
}
