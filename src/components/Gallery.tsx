import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import type { GalleryItem } from '../data/gallery'
import { useI18n } from '../i18n/context'
import { Reveal } from './ui'

export function GalleryGrid({
  items,
  columns = 3,
  categoryLabels,
}: {
  items: GalleryItem[]
  columns?: 2 | 3 | 4
  categoryLabels?: Record<GalleryItem['category'], string>
}) {
  const { t } = useI18n()
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length))
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? null : (i + 1) % items.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, items.length])

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length))
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % items.length))

  return (
    <>
      <div className={clsx('grid gap-4', gridCols[columns])}>
        {items.map((item, i) => (
          <Reveal key={item.src} delay={(i % columns) * 0.06}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/8 bg-steel-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left text-xs font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </p>
              <span
                className={clsx(
                  'absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                  item.category === 'project' && 'bg-amber-500/20 text-amber-400',
                  item.category === 'safety' && 'bg-emerald-500/20 text-emerald-400',
                  item.category === 'team' && 'bg-blue-500/20 text-blue-400',
                  item.category === 'award' && 'bg-purple-500/20 text-purple-400',
                )}
              >
                {categoryLabels?.[item.category] ?? item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-steel-950/95 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setActive(null)}
              aria-label={t.common.close}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label={t.common.previous}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label={t.common.next}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[active].src}
                alt={items[active].alt}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-slate-300">
                {items[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
