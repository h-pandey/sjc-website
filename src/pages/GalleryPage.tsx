import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, HardHat, Shield, Users, Award } from 'lucide-react'
import clsx from 'clsx'
import { galleryItems, awardImages, type GalleryItem } from '../data/gallery'
import { GalleryGrid } from '../components/Gallery'
import { Reveal, StatCounter } from '../components/ui'
import { useI18n } from '../i18n/context'
import type { GalleryCategory } from '../i18n/types'

const filterIcons = {
  all: Camera,
  project: HardHat,
  safety: Shield,
  team: Users,
  award: Award,
}

export function GalleryPage() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<GalleryCategory>('all')

  const allItems: GalleryItem[] = useMemo(
    () => [...galleryItems, ...awardImages],
    [],
  )

  const filtered = useMemo(
    () => (filter === 'all' ? allItems : allItems.filter((i) => i.category === filter)),
    [allItems, filter],
  )

  const counts = useMemo(
    () => ({
      all: allItems.length,
      project: allItems.filter((i) => i.category === 'project').length,
      safety: allItems.filter((i) => i.category === 'safety').length,
      team: allItems.filter((i) => i.category === 'team').length,
      award: allItems.filter((i) => i.category === 'award').length,
    }),
    [allItems],
  )

  const filters: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'project', label: t.gallery.filters.project },
    { key: 'safety', label: t.gallery.filters.safety },
    { key: 'team', label: t.gallery.filters.team },
    { key: 'award', label: t.gallery.filters.award },
  ]

  const categoryLabels = {
    project: t.gallery.filters.project,
    safety: t.gallery.filters.safety,
    team: t.gallery.filters.team,
    award: t.gallery.filters.award,
  }

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 lg:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/gallery/image12.jpeg')" }}
        />
        <div className="absolute inset-0 bg-steel-950/88" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              <span className="h-px w-8 bg-amber-500/60" />
              {t.gallery.hero.eyebrow}
            </span>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.gallery.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {t.gallery.hero.desc}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
              <StatCounter value={allItems.length} label={t.gallery.stats.photos} />
              <StatCounter
                value={counts.project}
                label={t.gallery.stats.projects}
              />
              <StatCounter value={counts.safety} label={t.gallery.stats.safety} />
              <StatCounter value={counts.team} label={t.gallery.stats.team} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[60px] z-30 border-b border-white/8 bg-steel-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 lg:px-8">
          {filters.map(({ key, label }) => {
            const Icon = filterIcons[key]
            const active = filter === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={clsx(
                  'inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
                  active
                    ? 'bg-amber-500 text-steel-950'
                    : 'border border-white/10 text-slate-400 hover:border-amber-500/30 hover:text-white',
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
                <span
                  className={clsx(
                    'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                    active ? 'bg-steel-950/20 text-steel-950' : 'bg-white/10 text-slate-500',
                  )}
                >
                  {counts[key]}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-slate-500">{t.gallery.empty}</p>
          ) : (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <GalleryGrid items={filtered} columns={3} categoryLabels={categoryLabels} />
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
