import clsx from 'clsx'
import { Mail, MapPin, Phone, FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { company } from '../data/company'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, Button } from '../components/ui'

// The enquiry form was removed for launch: it had no backend and discarded every
// submission. Its strings remain in i18n (contact.form) for when a form service is added.
export function ContactPage() {
  const { t } = useI18n()
  const c = t.contact

  const details: { icon: LucideIcon; label: string; value: string; href?: string; mono?: boolean }[] = [
    { icon: Phone, label: c.phone, value: company.phone, href: company.phoneHref },
    { icon: Mail, label: c.email, value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: c.location, value: company.location },
    { icon: FileText, label: c.gstin, value: company.gstin, mono: true },
  ]

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.desc} />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 overflow-hidden rounded-2xl border border-white/8 lg:flex">
              <img
                src="/gallery/image20.jpeg"
                alt=""
                className="h-48 w-full object-cover lg:h-auto lg:w-2/5"
              />
              <div className="flex flex-1 flex-col justify-center bg-steel-900/60 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                  {c.banner.eyebrow}
                </p>
                <p className="font-display mt-2 text-xl font-bold text-white">{c.banner.title}</p>
                <p className="mt-2 text-sm text-slate-400">{c.banner.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={company.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {t.common.callNow}
                  </Button>
                  <Button href={`mailto:${company.email}`} variant="outline">
                    <Mail className="h-4 w-4" />
                    {t.common.emailUs}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map(({ icon: Icon, label, value, href, mono }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <Card className="h-full">
                  <Icon className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">{label}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="mt-2 block break-words text-sm text-amber-400 transition hover:text-amber-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className={clsx('mt-2 break-words text-sm text-slate-400', mono && 'font-mono')}>
                      {value}
                    </p>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
