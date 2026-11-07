import { useI18n } from '../../i18n/context'
import { Reveal, SectionHeading } from '../ui'

export function WhyUsSection() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading subtitle={t.whyUs.eyebrow} title={t.whyUs.title} align="center" />
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {t.whyUs.items.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-8 transition duration-500 hover:border-amber-500/30 hover:bg-white/[0.04]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 transition group-hover:bg-amber-500/10" />
                <div className="font-display text-4xl font-bold text-amber-500">{d.stat}</div>
                <h3 className="font-display mt-4 text-xl font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
