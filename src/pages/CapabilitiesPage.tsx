import { stats } from '../data/company'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, StatCounter, SectionHeading } from '../components/ui'
import { CheckCircle2 } from 'lucide-react'

const roleCounts = [385, 278, 72, 47, 39, 39, 38, 15]

export function CapabilitiesPage() {
  const { t } = useI18n()
  const c = t.capabilities
  const maxCount = Math.max(...roleCounts)

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.desc} />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label}>
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  label={t.home.stats[i]?.label ?? s.label}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={c.technicians.eyebrow} title={c.technicians.title} />
            <p className="mt-4 max-w-2xl text-sm text-slate-400">{c.technicians.desc}</p>
          </Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.techniciansList.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={c.breakdown.eyebrow} title={c.breakdown.title} align="center" />
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400">{c.breakdown.desc}</p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {c.roles.map((role, i) => (
              <Reveal key={role} delay={i * 0.05}>
                <div className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm text-slate-400">{role}</span>
                  <div className="relative h-8 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-600 to-amber-400"
                      style={{ width: `${(roleCounts[i] / maxCount) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right font-display text-sm font-bold text-white">
                    {roleCounts[i]}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Card className="text-center">
              <h3 className="font-display text-2xl font-bold text-white">{c.closing.title}</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                {c.closing.desc}
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}
