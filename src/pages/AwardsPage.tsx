import { awards } from '../data/company'
import { awardImages } from '../data/gallery'
import { PageHero, Reveal, Card, SectionHeading } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import { Award, Star, Trophy } from 'lucide-react'

export function AwardsPage() {
  const byYear = awards.reduce<Record<string, typeof awards[number][]>>((acc, a) => {
    ;(acc[a.year] ??= []).push(a)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a))

  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="Awards & certifications"
        description="In just a decade since 2016, Shree Jagannath Construction has earned prestigious recognition from Tata Steel, India 5000 and national industry forums."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            <Reveal>
              <Card className="text-center">
                <Star className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">4-Star</div>
                <p className="mt-2 text-sm text-slate-400">Safety Rating — Tata Steel</p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="text-center">
                <Trophy className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">2×</div>
                <p className="mt-2 text-sm text-slate-400">India 5000 Best MSME Winner</p>
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="text-center">
                <Award className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">{awards.length}</div>
                <p className="mt-2 text-sm text-slate-400">Total recognitions listed</p>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <SectionHeading subtitle="Certificates" title="Award documents" />
          </Reveal>
          <div className="mb-16 mt-12">
            <GalleryGrid items={awardImages} columns={3} />
          </div>

          {years.map((year) => (
            <div key={year} className="mb-16">
              <Reveal>
                <h2 className="font-display mb-8 text-2xl font-bold text-amber-500">{year}</h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {byYear[year].map((a, i) => (
                  <Reveal key={a.title} delay={i * 0.06}>
                    <Card className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                        <Award className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{a.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{a.org}</p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
