import { Phone } from 'lucide-react'
import { company } from '../data/company'
import { useI18n } from '../i18n/context'

export function MobileCallBar() {
  const { t } = useI18n()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-steel-950/95 px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="flex gap-3">
        <a
          href={company.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-500 py-3 text-sm font-semibold text-steel-950"
        >
          <Phone className="h-4 w-4" />
          {t.common.callNow}
        </a>
        <a
          href={`mailto:${company.email}`}
          className="flex flex-1 items-center justify-center rounded-full border border-white/15 py-3 text-sm font-semibold text-white"
        >
          {t.common.email}
        </a>
      </div>
    </div>
  )
}
