import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { InstagramIcon, SubstackIcon } from './components/Icons'
import { BOOKING_URL, business, social } from './content'

const YEAR = new Date().getFullYear()

const nav = [
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/library', label: 'Library' },
]

/** Scroll to the #hash after navigating, or to the top on a new page. */
function useScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}

export default function Layout() {
  useScrollToHash()
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand">
          <img src="/brand/mark-light.svg" alt="" />
          <span>{business.name}</span>
        </Link>
        <nav>
          {nav.map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
          <Link to={BOOKING_URL} className="button button-small">Book</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <img className="footer-logo" src="/brand/logo.svg" alt={business.name} />
        <nav className="footer-nav">
          {nav.map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
        </nav>
        <div className="footer-social">
          <a href={social.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={social.substack.url} target="_blank" rel="noreferrer" aria-label="Substack">
            <SubstackIcon />
          </a>
        </div>
        <p>
          © {YEAR} {business.legalName} · {business.location} · Est. {business.established}
        </p>
        <p className="footer-disclaimer">
          Energy care and massage are complementary practices and are not a substitute for medical diagnosis or
          treatment.
        </p>
      </footer>
    </>
  )
}
