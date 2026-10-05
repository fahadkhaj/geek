'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const CAPABILITIES = [
  { slug: 'studio', name: 'Studio', line: 'Brand systems, identity, creative direction.' },
  { slug: 'media', name: 'Media', line: 'Film, photography, drone, production.' },
  { slug: 'marketing', name: 'Marketing', line: 'Social, communications, paid media.' },
  { slug: 'growth', name: 'Growth', line: 'Acquisition, performance, analytics.' },
  { slug: 'labs', name: 'Labs', line: 'Web, products, AI, automation.' },
]

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label="GEEK home">geek</Link>

        <nav aria-label="Primary">
          <ul className="nav">
            <li className="nav-item has-dropdown">
              <Link href="/capabilities">Capabilities</Link>
              <div className="mega-panel">
                <div className="mega-grid">
                  <div className="mega-col">
                    <h5>Studio &amp; Media</h5>
                    <ul>
                      <li><Link href="/capabilities/studio">Studio</Link></li>
                      <li><Link href="/capabilities/media">Media</Link></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Marketing &amp; Growth</h5>
                    <ul>
                      <li><Link href="/capabilities/marketing">Marketing</Link></li>
                      <li><Link href="/capabilities/growth">Growth</Link></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Technology</h5>
                    <ul>
                      <li><Link href="/capabilities/labs">Labs</Link></li>
                      <li><Link href="/capabilities">How we work</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item no-dropdown"><Link href="/work">Work</Link></li>

            <li className="nav-item has-dropdown">
              <Link href="/thinking">Thinking</Link>
              <div className="mega-panel">
                <div className="mega-grid">
                  <div className="mega-col">
                    <h5>Read</h5>
                    <ul>
                      <li><Link href="/thinking">Latest</Link></li>
                      <li><Link href="/thinking?cat=report">Reports</Link></li>
                      <li><Link href="/thinking?cat=blog">Blog posts</Link></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Topics</h5>
                    <ul>
                      <li><Link href="/thinking?tag=brand">Brand</Link></li>
                      <li><Link href="/thinking?tag=technology">Technology</Link></li>
                      <li><Link href="/thinking?tag=culture">Culture</Link></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Subscribe</h5>
                    <ul>
                      <li><Link href="/thinking#newsletter">Newsletter</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-dropdown">
              <Link href="/about">About</Link>
              <div className="mega-panel">
                <div className="mega-grid">
                  <div className="mega-col">
                    <h5>Company</h5>
                    <ul>
                      <li><Link href="/about">About GEEK</Link></li>
                      <li><Link href="/about#team">Team</Link></li>
                      <li><Link href="/about#careers">Careers</Link></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Contact</h5>
                    <ul>
                      <li><Link href="/start-a-project">Start a project</Link></li>
                      <li><a href="mailto:info@geekstudio.tz">info@geekstudio.tz</a></li>
                    </ul>
                  </div>
                  <div className="mega-col">
                    <h5>Legal</h5>
                    <ul>
                      <li><Link href="/legal/privacy">Privacy</Link></li>
                      <li><Link href="/legal/terms">Terms</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="/start-a-project" className="btn-connect">Connect</Link>
          <Link href="/start-a-project" className="btn-circle" aria-label="Start a project">
            <Arrow />
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer-grid">
          <div>
            <p className="site-footer-brand">geek</p>
            <p style={{ color: 'rgba(243,241,236,.6)', fontSize: 15, lineHeight: 1.5, maxWidth: '28ch' }}>
              Creative technology from Tanzania, built for the wider world.
            </p>
          </div>

          <div>
            <h4>Work</h4>
            <ul>
              <li><Link href="/work">Selected work</Link></li>
              <li><Link href="/thinking">Thinking</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/capabilities">Capabilities</Link></li>
              <li><Link href="/start-a-project">Start a project</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@geekstudio.tz">info@geekstudio.tz</a></li>
              <li><a href="tel:+255684200859">+255 684 200 859</a></li>
              <li>Dar es Salaam, Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© {year} GEEK</span>
          <span>Made in Tanzania. Built to travel.</span>
        </div>
      </div>

      <div className="footer-giant" aria-hidden="true">
        <span>geek</span>
      </div>
    </footer>
  )
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}