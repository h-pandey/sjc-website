import { technicians, stats } from '../data/company'
import { PageHero, Reveal, Card, StatCounter, SectionHeading } from '../components/ui'
import { CheckCircle2 } from 'lucide-react'

const workforceBreakdown = [
  { role: 'Riggers', count: 385 },
  { role: 'Helpers', count: 278 },
  { role: 'Welders', count: 72 },
  { role: 'Gas Cutters', count: 47 },
  { role: 'Supervisors', count: 39 },
  { role: 'Fitters', count: 39 },
  { role: 'Grinders', count: 38 },
  { role: 'Fabricators', count: 15 },
]

export function CapabilitiesPage() {
  const maxCount = Math.max(...workforceBreakdown.map((w) => w.count))

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Skilled workforce at scale"
        description="800+ workers deployed across Tata Steel Kalinganagar, Jindal Steel Angul and L&T sites — with an average of 15+ years experience in steel plant erection."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="Technician categories"
              title="Every skill the job demands"
            />
            <p className="mt-4 max-w-2xl text-sm text-slate-400">
              We manage and rotate manpower as per job requirements and can acquire
              additional skilled technicians as needed. All workers adhere to strict safety
              and disciplinary rules at the workplace.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technicians.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm text-slate-300">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="Workforce composition"
              title="Designation breakdown at TSK"
              align="center"
            />
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400">
              Sample from active workmen register — CRM, Pellet Plant & BF-2 at Kalinganagar.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {workforceBreakdown.map((w, i) => (
              <Reveal key={w.role} delay={i * 0.05}>
                <div className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm text-slate-400">{w.role}</span>
                  <div className="relative h-8 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000"
                      style={{ width: `${(w.count / maxCount) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right font-display text-sm font-bold text-white">
                    {w.count}
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
              <h3 className="font-display text-2xl font-bold text-white">
                Perfect mix of skills and experience
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                Our organisation combines veteran supervisors with skilled tradespeople —
                fitters, welders, riggers, fabricators and safety stewards — all dedicated
                to on-time, safe delivery. We can scale teams rapidly for shutdowns and
                expansion projects.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}
