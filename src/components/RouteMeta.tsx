import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { pageKeyForPath, pageMeta, pages, pageUrl } from '../data/seo'

/** Keeps the document title, description and canonical link in sync with the route and language. */
export function RouteMeta() {
  const { pathname } = useLocation()
  const { t } = useI18n()
  const key = pageKeyForPath(pathname)

  useEffect(() => {
    const { title, description } = pageMeta(t, key)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    const page = pages.find((p) => p.key === key)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (page && canonical) canonical.setAttribute('href', pageUrl(page.path))
  }, [t, key])

  return null
}
