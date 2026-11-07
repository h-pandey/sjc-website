import { useI18n } from '../../i18n/context'
import { Reveal, SectionHeading } from '../ui'

export function ProcessSection() {
  const { t } = useI18n()

  return (
    <section className="border-y border-white/8 bg-steel-900/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            subtitle={t.process.eyebrow}
            title={t.process.title}
            align="center"
          />
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent lg:left-1/2 lg:block" />
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {t.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div
                  className={`relative flex gap-6 lg:items-start ${
                    i % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 font-display text-lg font-bold text-amber-400">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
