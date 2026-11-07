import { clients } from '../data/company'
import { useI18n } from '../i18n/context'

export function ClientMarquee() {
  const { t } = useI18n()
  const items = [...clients, ...clients]

  return (
    <section className="overflow-hidden border-y border-white/8 bg-steel-900/50 py-8">
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
        {t.home.clientsLabel}
      </p>
      <div className="marquee-pause group relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-16 px-8">
          {items.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-slate-500 transition-colors group-hover:text-slate-400"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
