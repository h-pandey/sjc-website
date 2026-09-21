import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import { company } from '../data/company'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/awards', label: 'Awards' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen">
      <div className="grain" aria-hidden />

      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'border-b border-white/8 bg-steel-950/80 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Shree Jagannath Construction"
              className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10 transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold tracking-wide text-white">
                Shree Jagannath
              </div>
              <div className="text-[11px] uppercase tracking-widest text-slate-500">
                Construction
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-white/10 text-amber-400'
                      : 'text-slate-400 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-steel-950 transition hover:bg-amber-400"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/8 bg-steel-950/95 px-6 py-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-lg px-4 py-3 text-sm font-medium',
                      isActive ? 'bg-white/10 text-amber-400' : 'text-slate-300',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="mt-2 rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-steel-950"
              >
                Email us
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/8 bg-steel-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="font-display text-xl font-bold text-white">
                {company.legalName}
              </div>
              <p className="mt-1 text-sm text-amber-500">{company.tagline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                {company.description}
              </p>
              <p className="mt-4 text-xs text-slate-500">GSTIN: {company.gstin}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-400 transition hover:text-amber-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {company.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="glow-line mt-12" />
          <p className="mt-8 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
