import { ArrowUpRight, Smartphone } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Reveal, Button } from '../ui'

export function PortalBanner() {
  const { t } = useI18n()

  return (
    <section className="border-y border-white/8 bg-steel-900/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-steel-900 to-steel-950 p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                <Smartphone className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t.workforcePortal.eyebrow}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-white lg:text-3xl">
                  {t.workforcePortal.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                  {t.workforcePortal.desc}
                </p>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0 lg:shrink-0">
              <Button href="/portal" variant="outline">
                {t.workforcePortal.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <p className="mt-2 text-center text-[11px] text-slate-600 lg:text-right">
                {t.workforcePortal.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
