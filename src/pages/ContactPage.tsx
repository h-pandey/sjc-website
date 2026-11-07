import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Card, Button } from '../components/ui'
import { Mail, MapPin, Phone, FileText, Send, CheckCircle } from 'lucide-react'

export function ContactPage() {
  const { t } = useI18n()
  const c = t.contact
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
              </div>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <Reveal>
                <Card>
                  <Phone className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">{c.phone}</h3>
                  <a
                    href={company.phoneHref}
                    className="mt-2 block text-sm text-amber-400 transition hover:text-amber-300"
                  >
                    {company.phone}
                  </a>
                </Card>
              </Reveal>
              <Reveal delay={0.06}>
                <Card>
                  <Mail className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">{c.email}</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-sm text-amber-400 transition hover:text-amber-300"
                  >
                    {company.email}
                  </a>
                </Card>
              </Reveal>
              <Reveal delay={0.12}>
                <Card>
                  <MapPin className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">{c.location}</h3>
                  <p className="mt-2 text-sm text-slate-400">{company.location}</p>
                </Card>
              </Reveal>
              <Reveal delay={0.18}>
                <Card>
                  <FileText className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">{c.gstin}</h3>
                  <p className="mt-2 font-mono text-sm text-slate-400">{company.gstin}</p>
                </Card>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-3">
              <Card>
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
                    <h3 className="font-display mt-4 text-xl font-bold text-white">
                      {c.form.successTitle}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {c.form.successDesc}{' '}
                      <a href={`mailto:${company.email}`} className="text-amber-400">
                        {company.email}
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-xl font-bold text-white">{c.form.title}</h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">
                          {c.form.name}
                        </label>
                        <input
                          id="name"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                          placeholder={c.form.namePh}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-xs font-medium text-slate-400">
                          {c.form.company}
                        </label>
                        <input
                          id="company"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                          placeholder={c.form.companyPh}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-400">
                        {c.form.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                        placeholder={c.form.emailPh}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs font-medium text-slate-400">
                        {c.form.service}
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-xl border border-white/10 bg-steel-800 px-4 py-3 text-sm text-white focus:border-amber-500/50 focus:outline-none"
                      >
                        {c.form.serviceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-400">
                        {c.form.message}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                        placeholder={c.form.messagePh}
                      />
                    </div>
                    <Button type="submit">
                      {c.form.submit}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
