import { useEffect, useState, type ReactNode } from 'react'
import { Download, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigation = [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Projects', to: '/projects' }, { label: 'Contact', to: '/contact' }]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('pallavi-theme') !== 'light')

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pallavi-theme', theme)
  }, [darkMode])

  return <div className="site-shell">
    <ScrollToTop /><a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Pallavi Pradhanya home"><span className="brand-mark">P</span><span>Pallavi Pradhanya</span></Link>
      <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">{navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}</nav>
      <div className="header-actions">
        <button className="icon-button" type="button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}>{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
        <Link className="button button-small" to="/contact">Let&apos;s connect</Link>
        <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <footer><Link className="brand" to="/"><span className="brand-mark">P</span><span>Pallavi Pradhanya</span></Link><div><a href="mailto:pradhanyapallavi@gmail.com"><Mail size={15} /> Email</a><a href="/Pallavi-Pradhanya-Resume.pdf" download><Download size={15} /> Resume</a></div><p>Designed for the next opportunity · 2026</p></footer>
  </div>
}
