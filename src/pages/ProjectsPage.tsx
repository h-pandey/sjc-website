import { tskPhase2Jobs } from '../data/company'
import { galleryItems } from '../data/gallery'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, SectionHeading } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import clsx from 'clsx'

export function ProjectsPage() {
  const { t } = useI18n()
  const p = t.projects

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} description={p.hero.desc} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={p.ongoing.eyebrow} title={p.ongoing.title} />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {p.active.map((proj, i) => (
              <Reveal key={proj.area} delay={i * 0.08}>
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                        {proj.progress}
                      </span>
                      <h3 className="font-display mt-3 text-xl font-bold text-white">{proj.area}</h3>
                      <p className="mt-3 text-sm text-slate-400">{proj.scope}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={p.phase2.eyebrow} title={p.phase2.title} />
            <p className="mt-4 max-w-2xl text-sm text-slate-400">{p.phase2.desc}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-white/8">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.03]">
                    <th className="px-6 py-4 font-semibold text-slate-400">{p.phase2.period}</th>
                    <th className="px-6 py-4 font-semibold text-slate-400">{p.phase2.location}</th>
                    <th className="px-6 py-4 font-semibold text-slate-400">{p.phase2.activity}</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-400">
                      {p.phase2.tonnage}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p.phase2Jobs.map((job, i) => (
                    <tr
                      key={job.activity}
                      className={clsx(
                        'border-b border-white/5 transition hover:bg-white/[0.02]',
                        i % 2 === 0 && 'bg-white/[0.01]',
                      )}
                    >
                      <td className="px-6 py-4 text-slate-300">{job.period}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                          {job.location}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{job.activity}</td>
                      <td className="px-6 py-4 text-right font-display font-bold text-white">
                        {tskPhase2Jobs[i]?.tonnage.toLocaleString() ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-amber-500/5">
                    <td colSpan={3} className="px-6 py-4 font-semibold text-amber-400">
                      {p.phase2.total}
                    </td>
                    <td className="px-6 py-4 text-right font-display text-xl font-bold text-amber-500">
                      {tskPhase2Jobs.reduce((s, j) => s + j.tonnage, 0).toLocaleString()} MT
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/8 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={p.gallery.eyebrow} title={p.gallery.title} />
          </Reveal>
          <div className="mt-12">
            <GalleryGrid
              items={galleryItems}
              columns={3}
              categoryLabels={{
                project: t.gallery.filters.project,
                safety: t.gallery.filters.safety,
                team: t.gallery.filters.team,
                award: t.gallery.filters.award,
              }}
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={p.legacy.eyebrow} title={p.legacy.title} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {p.legacyItems.map((proj, i) => (
              <Reveal key={proj.location} delay={i * 0.05}>
                <Card hover={false}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-white">{proj.location}</h3>
                      <p className="mt-2 text-sm text-slate-400">{proj.scope}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      {p.status.completed}
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
