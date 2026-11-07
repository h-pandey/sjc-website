import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import { company } from '../data/company'
import { pages } from '../data/seo'
import { useI18n } from '../i18n/context'
import { ScrollProgress } from './ScrollProgress'
import { BackToTop } from './BackToTop'
import { MobileCallBar } from './MobileCallBar'
import { PageTransition } from './PageTransition'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Layout() {
  const { t } = useI18n()

  const nav = pages.map((page) => ({ to: page.path, label: t.nav[page.key] }))
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="relative min-h-screen pb-20 lg:pb-0">
      <ScrollProgress />
      <div className="grain" aria-hidden />

      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'border-b border-white/8 bg-steel-950/85 py-3 shadow-lg shadow-black/20 backdrop-blur-xl'
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

          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors',
                    isActive ? 'text-amber-400' : 'text-slate-400 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Between lg and xl the menu button shows too: keep these buttons beside it on the right. */}
          <div className="hidden items-center gap-2 lg:ml-auto lg:mr-3 lg:flex xl:mx-0">
            <LanguageSwitcher compact />
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-steel-950 transition hover:bg-amber-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.3)]"
            >
              {t.common.getInTouch}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white xl:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.common.toggleMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/8 bg-steel-950/98 backdrop-blur-xl xl:hidden"
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        clsx(
                          'block rounded-lg px-4 py-3 text-sm font-medium',
                          isActive ? 'bg-white/10 text-amber-400' : 'text-slate-300',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <a
                  href={company.phoneHref}
                  className="mt-2 rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  {company.phone}
                </a>
                <div className="mt-3 lg:hidden">
                  <LanguageSwitcher />
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-steel-950 lg:hidden"
                >
                  {t.common.emailUs}
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/8 bg-steel-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/logo.jpeg" alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <div className="font-display text-xl font-bold text-white">
                    {company.legalName}
                  </div>
                  <p className="text-sm text-amber-500">{company.tagline}</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                {company.description}
              </p>
              <p className="mt-4 text-xs text-slate-500">GSTIN: {company.gstin}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {t.common.navigate}
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
                {t.common.contact}
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
            © {new Date().getFullYear()} {company.legalName}. {t.common.allRights}
          </p>
        </div>
      </footer>

      <BackToTop />
      <MobileCallBar />
    </div>
  )
}
