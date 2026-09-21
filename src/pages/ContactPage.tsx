import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { PageHero, Reveal, Card, Button } from '../components/ui'
import { Mail, MapPin, Phone, FileText, Send, CheckCircle } from 'lucide-react'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your project"
        description="Share your scope — fabrication, erection, manpower or maintenance — and we'll get back to you promptly."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <Reveal>
                <Card>
                  <Phone className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">Phone</h3>
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
                  <h3 className="font-display mt-4 font-semibold text-white">Email</h3>
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
                  <h3 className="font-display mt-4 font-semibold text-white">Location</h3>
                  <p className="mt-2 text-sm text-slate-400">{company.location}</p>
                </Card>
              </Reveal>
              <Reveal delay={0.18}>
                <Card>
                  <FileText className="h-6 w-6 text-amber-500" />
                  <h3 className="font-display mt-4 font-semibold text-white">GSTIN</h3>
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
                      Message received
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      This is a demo form. For immediate enquiries, email us directly at{' '}
                      <a href={`mailto:${company.email}`} className="text-amber-400">
                        {company.email}
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-xl font-bold text-white">Send an enquiry</h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">
                          Full name
                        </label>
                        <input
                          id="name"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-xs font-medium text-slate-400">
                          Company
                        </label>
                        <input
                          id="company"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                          placeholder="Your organisation"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-400">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs font-medium text-slate-400">
                        Service required
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-xl border border-white/10 bg-steel-800 px-4 py-3 text-sm text-white focus:border-amber-500/50 focus:outline-none"
                      >
                        <option>Fabrication & Erection</option>
                        <option>Manpower Supply</option>
                        <option>Piping & Ducting</option>
                        <option>Equipment Erection</option>
                        <option>Maintenance / Shutdown</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-400">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                        placeholder="Describe your scope, location and timeline..."
                      />
                    </div>
                    <Button type="submit">
                      Send enquiry
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
