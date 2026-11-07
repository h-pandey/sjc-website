import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, SectionHeading } from '../components/ui'
import {
  Layers,
  Construction,
  GitBranch,
  Cog,
  Users,
  Wrench,
  Package,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const icons: LucideIcon[] = [
  Layers,
  Construction,
  GitBranch,
  Cog,
  Users,
  Wrench,
  Package,
  ShieldCheck,
]

export function ServicesPage() {
  const { t } = useI18n()
  const s = t.services

  return (
    <>
      <PageHero eyebrow={s.hero.eyebrow} title={s.hero.title} description={s.hero.desc} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item, i) => {
              const Icon = icons[i] ?? Layers
              const featured = i === 0 || i === 4
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <Card className={`group h-full ${featured ? 'lg:row-span-2' : ''}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500 transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display mt-4 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    {featured && (
                      <div className="mt-6 overflow-hidden rounded-xl border border-white/8">
                        <img
                          src={i === 0 ? '/gallery/image12.jpeg' : '/gallery/image10.jpeg'}
                          alt=""
                          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle={s.coverage.eyebrow}
              title={s.coverage.title}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.plantAreas.map((area, i) => (
              <Reveal key={area} delay={i * 0.05}>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] px-6 py-8 text-center transition hover:border-amber-500/30">
                  <span className="font-display text-lg font-semibold text-white">{area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
