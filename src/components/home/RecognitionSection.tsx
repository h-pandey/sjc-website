import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useI18n } from '../../i18n/context'
import { Reveal, SectionHeading } from '../ui'

export function RecognitionSection() {
  const { t } = useI18n()

  return (
    <section className="border-y border-white/8 bg-steel-900/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            subtitle={t.recognition.eyebrow}
            title={t.recognition.title}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.recognition.quotes.map((item, i) => (
            <Reveal key={item.source + item.year} delay={i * 0.1}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="relative h-full rounded-2xl border border-white/8 bg-white/[0.03] p-8"
              >
                <Quote className="h-8 w-8 text-amber-500/40" />
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/8 pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-white">{item.source}</span>
                    <span className="ml-2 text-xs text-amber-500">{item.year}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
