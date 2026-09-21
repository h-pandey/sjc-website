import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Award,
  HardHat,
  ChevronRight,
} from 'lucide-react'
import {
  company,
  stats,
  services,
  clients,
  awards,
  activeProjects,
  plantAreas,
} from '../data/company'
import { Reveal, SectionHeading, Button, StatCounter, Card } from '../components/ui'
import { GalleryGrid } from '../components/Gallery'
import { galleryItems } from '../data/gallery'

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gallery/image6.jpeg')" }}
        />
        <div className="absolute inset-0 bg-steel-950/85" />
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/6 blur-[100px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              Active at {company.activeSite}
            </div>

            <h1 className="font-display max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We build{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                steel plants
              </span>{' '}
              that last generations
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {company.legalName} — {company.tagline.toLowerCase()}. From blast furnace
              erection to pellet plant fabrication, we deliver precision structural work
              across India&apos;s leading integrated steel plants.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/projects">
                View our projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Request a quote
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 gap-8 border-t border-white/8 pt-12 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
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

      {/* Clients marquee */}
      <section className="overflow-hidden border-y border-white/8 bg-steel-900/50 py-6">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex shrink-0 items-center gap-12 px-6">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="text-sm font-medium uppercase tracking-widest text-slate-500"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="What we do"
              title="End-to-end steel plant execution"
            />
            <p className="mt-6 max-w-2xl text-slate-400">
              Fabrication, erection, piping, equipment and manpower — deployed across
              every major area of an integrated steel plant.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-500">
                    <HardHat className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition hover:text-amber-400"
            >
              All services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Plant areas */}
      <section className="border-y border-white/8 bg-steel-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="Plant expertise"
              title="Every zone of the integrated steel plant"
              align="center"
            />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {plantAreas.map((area, i) => (
              <Reveal key={area} delay={i * 0.05}>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300">
                  {area}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Active projects */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="Current work"
              title="Tata Steel Kalinganagar — Phase II"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {activeProjects.map((p, i) => (
              <Reveal key={p.area} delay={i * 0.1}>
                <Card className="group relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/5 transition group-hover:bg-amber-500/10" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                        {p.location}
                      </span>
                      <h3 className="font-display mt-2 text-xl font-bold text-white">
                        {p.area}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{p.scope}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-display text-2xl font-bold text-amber-500">
                        {p.tonnage}
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
              Full project history
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="border-t border-white/8 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              subtitle="On site"
              title="Real work. Real steel plants."
            />
            <p className="mt-4 max-w-2xl text-slate-400">
              Photos from active projects at Tata Steel Kalinganagar and across
              our portfolio — structural erection, piping, crane lifts and safety
              programmes.
            </p>
          </Reveal>
          <div className="mt-12">
            <GalleryGrid items={galleryItems.slice(0, 9)} columns={3} />
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/projects" variant="outline">
              See full project portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t border-white/8 bg-steel-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    4-Star Safety Rating
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Recognised by Tata Steel for safety compliance — a non-negotiable
                    standard across every site we operate.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Award-winning MSME
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    India 5000 Best MSME Awards winner in 2024 and 2026 — excellence in
                    heavy structural fabrication and erection.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                  <HardHat className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    800+ skilled workforce
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    350+ at TSK & JSP Angul, 450+ under L&T — technicians with 15+ years
                    average experience in steel plant erection.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Awards preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Recognition" title="Awards & certifications" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.slice(0, 6).map((a, i) => (
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
              View all awards
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-steel-800 to-steel-900 p-12 text-center lg:p-20">
              <div className="absolute inset-0 grid-overlay opacity-50" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  Ready to discuss your next project?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-400">
                  From manpower supply to 600-tonne structural erection — tell us about
                  your scope and we&apos;ll respond promptly.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href={`mailto:${company.email}`}>
                    {company.email}
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contact form
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
