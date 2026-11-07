import { awardImages } from '../data/gallery'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, SectionHeading } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import { Award, Star, Trophy } from 'lucide-react'

export function AwardsPage() {
  const { t } = useI18n()
  const a = t.awards

  const years = [...new Set(a.items.map((i) => i.year))].sort((x, y) => y.localeCompare(x))

  return (
    <>
      <PageHero eyebrow={a.hero.eyebrow} title={a.hero.title} description={a.hero.desc} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            <Reveal>
              <Card className="text-center">
                <Star className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">4-Star</div>
                <p className="mt-2 text-sm text-slate-400">{a.highlights.safety}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="text-center">
                <Trophy className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">2×</div>
                <p className="mt-2 text-sm text-slate-400">{a.highlights.msme}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="text-center">
                <Award className="mx-auto h-8 w-8 text-amber-500" />
                <div className="font-display mt-4 text-3xl font-bold text-white">{a.items.length}</div>
                <p className="mt-2 text-sm text-slate-400">{a.highlights.total}</p>
              </Card>
            </Reveal>
          </div>

          <Reveal>
            <SectionHeading subtitle={a.certificates.eyebrow} title={a.certificates.title} />
          </Reveal>
          <div className="mb-16 mt-12">
            <GalleryGrid
              items={awardImages}
              columns={3}
              categoryLabels={{
                project: t.gallery.filters.project,
                safety: t.gallery.filters.safety,
                team: t.gallery.filters.team,
                award: t.gallery.filters.award,
              }}
            />
          </div>

          {years.map((year) => (
            <div key={year} className="mb-16">
              <Reveal>
                <h2 className="font-display mb-8 text-2xl font-bold text-amber-500">{year}</h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {a.items
                  .filter((item) => item.year === year)
                  .map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.06}>
                      <Card className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                          <Award className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-slate-500">{item.org}</p>
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
