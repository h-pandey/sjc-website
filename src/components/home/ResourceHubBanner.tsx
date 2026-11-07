import { ArrowUpRight, Boxes } from 'lucide-react'
import { resourceHubDemoUrl } from '../../data/company'
import { useI18n } from '../../i18n/context'
import { Reveal, Button } from '../ui'

export function ResourceHubBanner() {
  const { t } = useI18n()

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-steel-800 via-steel-900 to-steel-950 p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div className="absolute inset-0 grid-overlay opacity-30" />
            <div className="relative flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                <Boxes className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {t.resourceHub.eyebrow}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-white lg:text-3xl">
                  {t.resourceHub.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">{t.resourceHub.desc}</p>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0 lg:shrink-0">
              <Button href={resourceHubDemoUrl}>
                {t.common.launchDemo}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <p className="mt-2 text-center text-[11px] text-slate-600 lg:text-right">
                {t.resourceHub.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
