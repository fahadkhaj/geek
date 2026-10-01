'use client'

import { useState } from 'react'

export function StartForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, unknown> = {}
    for (const [k, v] of fd.entries()) {
      if (k === 'capabilities') {
        const arr = (payload.capabilities as string[]) || []
        arr.push(String(v))
        payload.capabilities = arr
      } else {
        payload[k] = v
      }
    }

    const res = await fetch('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
    setStatus(res.ok ? 'ok' : 'err')
  }

  if (status === 'ok') {
    return (
      <div className="border border-ink-12 p-8 bg-signal-dim">
        <p className="font-display font-bold text-[length:var(--t-h3)]">Thank you.</p>
        <p className="mt-3 text-ink-60">
          We've received your brief and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="organisation" label="Company" />
        <Field name="phone" label="Phone (optional)" />
      </div>

      <fieldset>
        <legend className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60 mb-3">
          What do you need?
        </legend>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {['studio', 'media', 'marketing', 'growth', 'labs'].map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="capabilities"
                value={c}
                className="accent-signal"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                {c}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60 mb-2 block">
            Budget range
          </label>
          <select
            name="budget"
            className="w-full bg-transparent border-b border-ink-12 py-3 focus:outline-none focus:border-signal"
          >
            <option value="">Select</option>
            <option value="under-5m">Under TZS 5M</option>
            <option value="5-15m">TZS 5–15M</option>
            <option value="15-50m">TZS 15–50M</option>
            <option value="50m-plus">TZS 50M+</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60 mb-2 block">
            Timeline
          </label>
          <select
            name="timeline"
            className="w-full bg-transparent border-b border-ink-12 py-3 focus:outline-none focus:border-signal"
          >
            <option value="">Select</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60 mb-2 block">
          Tell us about the project
        </label>
        <textarea
          name="brief"
          required
          rows={6}
          className="w-full bg-transparent border border-ink-12 p-4 focus:outline-none focus:border-signal resize-y"
          placeholder="What are you building? What problem is it solving? Anything we should know."
        />
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex items-center gap-6 flex-wrap">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="font-mono text-[11px] uppercase tracking-[0.18em] bg-ink text-paper px-8 py-4 hover:bg-signal transition-colors duration-300 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send brief →'}
        </button>
        {status === 'err' && (
          <p className="text-danger font-mono text-[11px] uppercase tracking-[0.14em]">
            Something went wrong. Try again or email info@geekstudio.tz.
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  required,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60 mb-2 block"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink-12 py-3 focus:outline-none focus:border-signal"
      />
    </div>
  )
}