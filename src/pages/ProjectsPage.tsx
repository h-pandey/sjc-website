import { legacyProjects, activeProjects, tskPhase2Jobs } from '../data/company'
import { galleryItems } from '../data/gallery'
import { PageHero, Reveal, Card, SectionHeading } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import clsx from 'clsx'

function StatusBadge({ status }: { status: string }) {
  const isActive = status.toLowerCase().includes('running') || status.includes('%')
  const isComplete = status.toLowerCase().includes('complete') || status === 'Completed'
  return (
    <span
      className={clsx(
        'rounded-full px-2.5 py-0.5 text-xs font-medium',
        isActive && 'bg-amber-500/15 text-amber-400',
        isComplete && 'bg-emerald-500/15 text-emerald-400',
        !isActive && !isComplete && 'bg-slate-500/15 text-slate-400',
      )}
    >
      {status}
    </span>
  )
}

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects across India's steel heartland"
        description="From Tata Steel Jamshedpur to Kalinganagar Phase-II — three decades of fabrication and erection at every major integrated steel plant."
      />

      {/* Active */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Ongoing" title="Active at Tata Steel Kalinganagar" />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {activeProjects.map((p, i) => (
              <Reveal key={p.area} delay={i * 0.08}>
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <StatusBadge status={p.progress} />
                      <h3 className="font-display mt-3 text-xl font-bold text-white">{p.area}</h3>
                      <p className="mt-1 text-xs text-slate-500">{p.location}</p>
                      <p className="mt-3 text-sm text-slate-400">{p.scope}</p>
                    </div>
                    <div className="font-display shrink-0 text-right text-2xl font-bold text-amber-500">
                      {p.tonnage}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TSK Phase II table */}
      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="TSK Phase-II"
              title="Major erection jobs (2020–2026)"
            />
            <p className="mt-4 max-w-2xl text-sm text-slate-400">
              Measure lift / job activity at Tata Steel Kalinganagar Phase-II — structural
              erection across CRM, Pellet Plant and BF-2.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-white/8">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.03]">
                    <th className="px-6 py-4 font-semibold text-slate-400">Period</th>
                    <th className="px-6 py-4 font-semibold text-slate-400">Location</th>
                    <th className="px-6 py-4 font-semibold text-slate-400">Activity</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-400">
                      Tonnage (MT)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tskPhase2Jobs.map((job, i) => (
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
                        {job.tonnage.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-amber-500/5">
                    <td colSpan={3} className="px-6 py-4 font-semibold text-amber-400">
                      Total (listed jobs)
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

      {/* Site gallery */}
      <section className="border-t border-white/8 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Gallery" title="Site photography" />
          </Reveal>
          <div className="mt-12">
            <GalleryGrid items={galleryItems} columns={3} />
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Track record" title="Completed projects" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {legacyProjects.map((p, i) => (
              <Reveal key={p.location} delay={i * 0.05}>
                <Card hover={false}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-white">{p.location}</h3>
                      <p className="mt-2 text-sm text-slate-400">{p.scope}</p>
                    </div>
                    <StatusBadge status={p.status} />
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
