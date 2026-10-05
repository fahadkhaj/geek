'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  stagger?: boolean
  as?: keyof React.JSX.IntrinsicElements
  threshold?: number
}

export function Reveal({
  children,
  className = '',
  stagger = false,
  as: Tag = 'div',
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  const cls = `${stagger ? 'reveal-stagger' : 'reveal'} ${className}`.trim()

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  )
}