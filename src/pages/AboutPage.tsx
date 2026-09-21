import { company, leadership, timeline, mission, vision } from '../data/company'
import { PageHero, Reveal, Card } from '../components/ui'
import { Target, Eye } from 'lucide-react'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Three decades of steel plant mastery"
        description="From Balaji Construction in 1992 to Shree Jagannath Construction today — combining veteran expertise with modern execution."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white">Company history</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400">
                <p>
                  {company.legalName} traces its roots to <strong className="text-slate-300">1992</strong>, when
                  Mr. Y Narayan Rao founded M/s Balaji Construction — a small construction company
                  that grew within the Tata Steel Jamshedpur ecosystem. Work was also carried out
                  under M/s V S Engineering at various sites.
                </p>
                <p>
                  In <strong className="text-slate-300">2016</strong>, his son Mr. Shankar Rao joined the business
                  and Shree Jagannath Construction was formed — with the aim of building new-age
                  steel plants by combining age-old knowledge with modern technology and youthful
                  enthusiasm.
                </p>
                <p>
                  The firm deals in fabrication, erection, heavy structural work, pipelines,
                  equipment, general order supply, manpower supply and maintenance jobs across
                  blast furnaces, COBP, sinter plants, RMHS, SMS, CEPT and pellet plants.
                </p>
                <p>
                  The company believes in hard work, sincerity, and maintaining strict safety and
                  quality standards — always encouraging employees to take on new responsibilities.
                </p>
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
                      <h3 className="font-display font-semibold text-white">Mission</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{mission}</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-500">
                      <Eye className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white">Vision</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{vision}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-bold text-white">
              Milestones
            </h2>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent lg:left-1/2 lg:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
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

      {/* Leadership */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-center text-3xl font-bold text-white">
              Leadership
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <Card className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/10 font-display text-2xl font-bold text-amber-400">
                    {person.name.split(' ').slice(-1)[0][0]}
                    {person.name.split(' ')[1]?.[0] ?? ''}
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
