import { services, plantAreas } from '../data/company'
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

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Construction,
  GitBranch,
  Cog,
  Users,
  Wrench,
  Package,
  ShieldCheck,
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-spectrum steel plant contracting"
        description="Fabrication, erection, piping, equipment, manpower and maintenance — delivered with safety-first execution across every plant zone."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Layers
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {s.description}
                        </p>
                      </div>
                    </div>
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
              subtitle="Coverage"
              title="Plant areas we work in"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plantAreas.map((area, i) => (
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
