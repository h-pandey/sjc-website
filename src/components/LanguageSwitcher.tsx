import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import clsx from 'clsx'
import { useI18n } from '../i18n/context'
import { locales, type Locale } from '../i18n/types'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const current = locales.find((l) => l.code === locale)!

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-300 transition hover:border-amber-500/30 hover:bg-white/10 hover:text-white',
          compact ? 'px-3 py-2' : 'px-4 py-2.5',
        )}
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4 shrink-0 text-amber-500" />
        <span className={compact ? 'hidden sm:inline' : ''}>{current.native}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-white/10 bg-steel-900/95 py-1 shadow-xl backdrop-blur-xl"
          >
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLocale(item.code as Locale)
                  setOpen(false)
                }}
                className={clsx(
                  'flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-white/5',
                  locale === item.code ? 'text-amber-400' : 'text-slate-300',
                )}
              >
                <span>
                  <span className="font-medium">{item.native}</span>
                  {item.code !== 'en' && (
                    <span className="ml-2 text-xs text-slate-500">{item.label}</span>
                  )}
                </span>
                {locale === item.code && <Check className="h-4 w-4 shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
