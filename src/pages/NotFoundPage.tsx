import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { PageHero, Reveal, Button } from '../components/ui'

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <>
      <PageHero eyebrow={t.notFound.eyebrow} title={t.notFound.title} description={t.notFound.desc} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="flex flex-wrap gap-4">
            <Button href="/">
              {t.notFound.home}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="outline">
              {t.nav.projects}
            </Button>
            <Button href="/contact" variant="outline">
              {t.nav.contact}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
