import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Award,
  ChevronRight,
  Layers,
  Construction,
  GitBranch,
  Cog,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { company, stats, activeProjects } from '../data/company'
import { useI18n } from '../i18n/context'
import { Reveal, SectionHeading, Button, StatCounter, Card } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import { galleryItems } from '../data/gallery'
import { HeroBackground } from '../components/HeroBackground'
import { ClientMarquee } from '../components/ClientMarquee'
import { ProcessSection } from '../components/home/ProcessSection'
import { WhyUsSection } from '../components/home/WhyUsSection'
import { RecognitionSection } from '../components/home/RecognitionSection'

const serviceIcons: LucideIcon[] = [Layers, Construction, GitBranch, Cog]

export function HomePage() {
  const { t } = useI18n()
  const h = t.home

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              {h.activeBadge}
            </div>

            <h1 className="font-display max-w-5xl text-5xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
              {h.heroWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    h.heroHighlightWords.includes(word)
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent'
                      : 'text-white'
                  }
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            >
              {h.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/projects">
                {h.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                {h.requestQuote}
              </Button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-slate-400 transition hover:text-amber-400"
              >
                {company.phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-8 border-t border-white/8 pt-12 lg:grid-cols-4"
          >
            {stats.map((s, i) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={h.stats[i]?.label ?? s.label}
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-10 w-6 rounded-full border border-white/20 p-1"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-amber-500" />
          </motion.div>
        </div>
      </section>

      <ClientMarquee />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={h.services.eyebrow} title={h.services.title} />
            <p className="mt-6 max-w-2xl text-slate-400">{h.services.desc}</p>
          </Reveal>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.slice(0, 4).map((s, i) => {
              const Icon = serviceIcons[i] ?? Layers
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <Card className="group h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-500 transition group-hover:scale-110 group-hover:bg-amber-500/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition hover:text-amber-400"
            >
              {h.services.allLink}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />

      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={h.plant.eyebrow} title={h.plant.title} align="center" />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {t.services.plantAreas.map((area, i) => (
              <Reveal key={area} delay={i * 0.05}>
                <span className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-amber-500/30 hover:text-white">
                  {area}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={h.projects.eyebrow} title={h.projects.title} />
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {t.projects.active.map((p, i) => (
              <Reveal key={p.area} delay={i * 0.1}>
                <Card className="group relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/5 transition group-hover:bg-amber-500/10" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                        Tata Steel Kalinganagar
                      </span>
                      <h3 className="font-display mt-2 text-xl font-bold text-white">{p.area}</h3>
                      <p className="mt-2 text-sm text-slate-400">{p.scope}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-display text-2xl font-bold text-amber-500">
                        {activeProjects[i]?.tonnage ?? '—'}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{p.progress}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/projects" variant="outline">
              {h.projects.fullHistory}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={h.gallery.eyebrow} title={h.gallery.title} />
            <p className="mt-4 max-w-2xl text-slate-400">{h.gallery.desc}</p>
          </Reveal>
          <div className="mt-12">
            <GalleryGrid
              items={galleryItems.slice(0, 9)}
              columns={3}
              categoryLabels={{
                project: t.gallery.filters.project,
                safety: t.gallery.filters.safety,
                team: t.gallery.filters.team,
                award: t.gallery.filters.award,
              }}
            />
          </div>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/gallery" variant="outline">
              {h.gallery.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <RecognitionSection />

      <section className="border-t border-white/8 bg-steel-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{h.trust.safetyTitle}</h3>
                  <p className="mt-2 text-sm text-slate-400">{h.trust.safetyDesc}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{h.trust.msmeTitle}</h3>
                  <p className="mt-2 text-sm text-slate-400">{h.trust.msmeDesc}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Construction className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {h.trust.workforceTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{h.trust.workforceDesc}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workforce Portal and ResourceHub banners (components/home/) are hidden until those products launch. */}

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle={h.awards.eyebrow} title={h.awards.title} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.awards.items.slice(0, 6).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <Card hover={false} className="flex items-start gap-4">
                  <span className="font-display shrink-0 text-2xl font-bold text-amber-500/40">
                    {a.year}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{a.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{a.org}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/awards"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500"
            >
              {h.awards.link}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-steel-800 to-steel-900 p-12 text-center lg:p-20">
              <div className="absolute inset-0 grid-overlay opacity-50" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {h.cta.title}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-400">{h.cta.desc}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href={company.phoneHref}>{company.phone}</Button>
                  <Button href={`mailto:${company.email}`} variant="outline">
                    {company.email}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
