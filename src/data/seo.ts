// Page list and page metadata, shared by the app (nav, document title) and by the
// build step in build/static-pages.ts (per-page HTML files and sitemap.xml).
// Keep this file free of browser-only APIs: it also runs in Node at build time.
import type { Translations } from '../i18n/en.ts'

export const SITE_URL = 'https://www.sjcprojects.in'
export const OG_IMAGE_PATH = '/gallery/image6.jpeg'

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'gallery'
  | 'capabilities'
  | 'awards'
  | 'contact'

/** Public pages, in nav order. Each gets its own HTML file at build time. */
export const pages: { key: PageKey; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'projects', path: '/projects' },
  { key: 'gallery', path: '/gallery' },
  { key: 'capabilities', path: '/capabilities' },
  { key: 'awards', path: '/awards' },
  { key: 'contact', path: '/contact' },
]

/**
 * Canonical URL of a page. GitHub Pages serves /about/index.html at /about/ and
 * redirects /about there, so the trailing-slash form is the one that returns 200.
 */
export function pageUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`
}

export function pageKeyForPath(pathname: string): PageKey | 'notFound' {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  return pages.find((page) => page.path === normalized)?.key ?? 'notFound'
}

export function pageMeta(
  t: Translations,
  key: PageKey | 'notFound',
): { title: string; description: string } {
  const site = t.meta.siteName
  switch (key) {
    case 'home':
      return { title: t.meta.title, description: t.meta.description }
    case 'about':
      return { title: `${t.nav.about} | ${site}`, description: t.about.hero.desc }
    case 'services':
      return { title: `${t.nav.services} | ${site}`, description: t.services.hero.desc }
    case 'projects':
      return { title: `${t.nav.projects} | ${site}`, description: t.projects.hero.desc }
    case 'gallery':
      return { title: `${t.nav.gallery} | ${site}`, description: t.gallery.hero.desc }
    case 'capabilities':
      return { title: `${t.nav.capabilities} | ${site}`, description: t.capabilities.hero.desc }
    case 'awards':
      return { title: `${t.nav.awards} | ${site}`, description: t.awards.hero.desc }
    case 'contact':
      return { title: `${t.nav.contact} | ${site}`, description: t.contact.hero.desc }
    case 'notFound':
      return { title: `${t.notFound.title} | ${site}`, description: t.notFound.desc }
  }
}
