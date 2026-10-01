import Link from 'next/link'
import { Mark } from './Mark'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-void text-paper">
      <div className="wrap py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Mark className="w-10 h-10 text-paper" />
          </div>

          <nav aria-label="Work">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mb-5">
              Work
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/work" className="hover:text-signal transition-colors">
                  Selected work
                </Link>
              </li>
              <li>
                <Link href="/thinking" className="hover:text-signal transition-colors">
                  Thinking
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-signal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-signal transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/start-a-project" className="hover:text-signal transition-colors">
                  Start a project
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@geekstudio.tz" className="hover:text-signal transition-colors">
                  info@geekstudio.tz
                </a>
              </li>
              <li>
                <a href="tel:+255684200859" className="hover:text-signal transition-colors">
                  +255 684 200 859
                </a>
              </li>
              <li>Dar es Salaam, Tanzania</li>
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
            © {year} GEEK — Built in Tanzania
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 hover:text-signal">
              Privacy
            </Link>
            <Link href="/legal/terms" className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 hover:text-signal">
              Terms
            </Link>
            <Link href="/legal/cookies" className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 hover:text-signal">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}