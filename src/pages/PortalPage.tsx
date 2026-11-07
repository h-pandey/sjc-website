import {
  Crown,
  Users,
  HardHat,
  CheckCircle2,
  Calendar,
  FileText,
  Upload,
  Download,
  Clock,
  Wallet,
  Shield,
  ArrowUpRight,
} from 'lucide-react'
import { company } from '../data/company'
import { PageHero, Reveal, Button, Card } from '../components/ui'
import { useI18n } from '../i18n/context'

const roleIcons = { owner: Crown, hr: Users, workmen: HardHat }
const roleColors = {
  owner: 'from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-400',
  hr: 'from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400',
  workmen: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400',
}

export function PortalPage() {
  const { t } = useI18n()
  const p = t.portal

  const roles = [
    { key: 'owner' as const, ...p.roles.owner },
    { key: 'hr' as const, ...p.roles.hr },
    { key: 'workmen' as const, ...p.roles.workmen },
  ]

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} description={p.hero.desc} />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-400">
              <Clock className="h-3.5 w-3.5" />
              {p.badge}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roles */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              {p.roles.eyebrow}
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
              {p.roles.title}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {roles.map((role, i) => {
              const Icon = roleIcons[role.key]
              return (
                <Reveal key={role.key} delay={i * 0.1}>
                  <div
                    className={`h-full rounded-2xl border bg-gradient-to-br p-8 ${roleColors[role.key]}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display mt-6 text-xl font-bold text-white">{role.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{role.desc}</p>
                    <ul className="mt-6 space-y-2">
                      {role.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Profile fields + Mock dashboard */}
      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {p.profile.eyebrow}
              </span>
              <h2 className="font-display mt-4 text-2xl font-bold text-white">{p.profile.title}</h2>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {p.profile.fields.map((field, i) => (
                  <div
                    key={field}
                    className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
                  >
                    <span className="font-display text-xs font-bold text-amber-500/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {field}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  <Upload className="h-3 w-3" /> {p.profile.tags.pdfUpload}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  <FileText className="h-3 w-3" /> {p.profile.tags.paysheetExport}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  <Calendar className="h-3 w-3" /> {p.profile.tags.weeklyOff}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {p.preview.eyebrow}
              </span>
              <h2 className="font-display mt-4 text-2xl font-bold text-white">{p.preview.title}</h2>

              {/* Mock workman dashboard */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-steel-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/8 bg-steel-900 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                      <HardHat className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{p.preview.sampleName}</div>
                      <div className="text-xs text-slate-500">
                        {p.preview.designation} · {p.preview.samplePeriod}
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {p.preview.present}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
                  {[
                    { label: p.preview.present, value: p.preview.presentDays, icon: Calendar },
                    { label: p.preview.ot, value: '—', icon: Clock },
                    { label: p.preview.netPay, value: '₹14,200', icon: Wallet },
                    { label: p.preview.pf, value: '₹1,560', icon: Shield },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="bg-steel-950 px-5 py-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </div>
                      <div className="font-display mt-1 text-lg font-bold text-white">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-white/8 p-4">
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 py-2.5 text-xs font-semibold text-steel-950"
                  >
                    <Download className="h-4 w-4" />
                    {p.preview.download}
                  </button>
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs font-semibold text-white"
                  >
                    <Calendar className="h-4 w-4" />
                    {p.preview.applyLeave}
                  </button>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-600">{p.preview.sampleNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Card className="relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-blue-500/5" />
              <div className="relative py-8">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {p.cta.title}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">{p.cta.desc}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="/contact">{t.common.requestEarlyAccess}</Button>
                  <Button href={`mailto:${company.email}`} variant="outline">
                    {company.email}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  )
}
