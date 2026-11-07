export type Locale = 'en' | 'hi' | 'or'

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'or', label: 'Odia', native: 'ଓଡ଼ିଆ' },
]

export type GalleryCategory = 'all' | 'project' | 'safety' | 'team' | 'award'
