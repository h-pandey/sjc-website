import { company } from '../data/company'
import { OG_IMAGE_PATH, SITE_URL } from '../data/seo'

export function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    description: company.description,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.jpeg`,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jajpur Road',
      addressLocality: 'Jajpur',
      addressRegion: 'Odisha',
      postalCode: '755019',
      addressCountry: 'IN',
    },
    taxID: company.gstin,
    areaServed: ['Odisha', 'Jharkhand', 'India'],
    knowsAbout: [
      'Steel plant fabrication',
      'Structural erection',
      'Manpower supply',
      'Industrial maintenance',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
