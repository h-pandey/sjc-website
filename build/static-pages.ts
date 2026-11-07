import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import type { Plugin } from 'vite'
import { en } from '../src/i18n/en.ts'
import { OG_IMAGE_PATH, SITE_URL, pageMeta, pageUrl, pages, type PageKey } from '../src/data/seo.ts'

// GitHub Pages has no SPA rewrites. After the build this writes one HTML file per page
// (dist/about/index.html, ...) so each page is served with HTTP 200 and carries its own
// title, description, canonical URL and link-preview tags. It also writes 404.html, which
// GitHub Pages serves with HTTP 404 for unknown URLs (the app then shows its not-found
// page), and sitemap.xml. Page list and texts come from src/data/seo.ts.

const START = '<!-- page-meta:start -->'
const END = '<!-- page-meta:end -->'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function metaTags(key: PageKey | 'notFound', url: string | null): string {
  const { title, description } = pageMeta(en, key)
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    url ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(en.meta.siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    ...(url ? [`<meta property="og:url" content="${url}" />`] : []),
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE_PATH}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
  ]
  return tags.join('\n    ')
}

function withMeta(template: string, tags: string): string {
  const start = template.indexOf(START)
  const end = template.indexOf(END)
  if (start === -1 || end < start) throw new Error(`index.html must contain ${START} ... ${END}`)
  return `${template.slice(0, start + START.length)}\n    ${tags}\n    ${template.slice(end)}`
}

export function staticPages(): Plugin {
  return {
    name: 'sjc-static-pages',
    apply: 'build',
    async writeBundle({ dir }) {
      if (!dir) throw new Error('sjc-static-pages: build output directory is unknown')
      const template = await readFile(join(dir, 'index.html'), 'utf8')

      for (const page of pages) {
        const file = join(dir, page.path.slice(1), 'index.html')
        await mkdir(dirname(file), { recursive: true })
        await writeFile(file, withMeta(template, metaTags(page.key, pageUrl(page.path))))
      }
      await writeFile(join(dir, '404.html'), withMeta(template, metaTags('notFound', null)))

      const urls = pages.map((page) => `  <url><loc>${pageUrl(page.path)}</loc></url>`).join('\n')
      await writeFile(
        join(dir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}
