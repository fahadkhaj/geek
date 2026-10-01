import Link from 'next/link'
import { Wordmark } from './Wordmark'

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/thinking', label: 'Thinking' },
  { href: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm border-b border-ink-12">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="/" aria-label="GEEK — home" className="text-2xl">
          <Wordmark />
        </Link>

        <nav aria-label="Primary">
          <ul className="hidden md:flex gap-10">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-60 hover:text-ink transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/start-a-project"
          className="font-mono text-[11px] uppercase tracking-[0.18em] bg-ink text-paper px-5 py-2.5 hover:bg-signal transition-colors duration-200"
        >
          Start a project
        </Link>
      </div>
    </header>
  )
}