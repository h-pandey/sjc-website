import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card } from '../components/ui'
import { Target, Eye } from 'lucide-react'

export function AboutPage() {
  const { t } = useI18n()
  const a = t.about

  return (
    <>
      <PageHero eyebrow={a.hero.eyebrow} title={a.hero.title} description={a.hero.desc} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/8">
                <img
                  src="/gallery/image15.jpeg"
                  alt="Shree Jagannath Construction team"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">{a.historyTitle}</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400">
                {a.history.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-500">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white">{a.mission}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.missionText}</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-500">
                      <Eye className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white">{a.vision}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.visionText}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-bold text-white">
              {a.milestones}
            </h2>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent lg:left-1/2 lg:block" />
            <div className="space-y-12">
              {a.timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                      i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="hidden lg:block lg:w-1/2" />
                    <div className="absolute left-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-amber-500 bg-steel-950 lg:left-1/2 lg:block" />
                    <div className="lg:w-1/2 lg:px-12">
                      <Card>
                        <span className="font-display text-sm font-bold text-amber-500">
                          {item.year}
                        </span>
                        <h3 className="mt-2 font-display text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                      </Card>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-bold text-white">
              {a.leadership}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {a.leaders.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <Card className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/10 font-display text-2xl font-bold text-amber-400">
                    {person.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <h3 className="font-display mt-4 text-xl font-bold text-white">{person.name}</h3>
                  <p className="text-sm text-amber-500">{person.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{person.bio}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
