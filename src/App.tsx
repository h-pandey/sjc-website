import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { RouteMeta } from './components/RouteMeta'
import { SeoSchema } from './components/SeoSchema'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { AwardsPage } from './pages/AwardsPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { NotFoundPage } from './pages/NotFoundPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

// The Workforce Portal page (pages/PortalPage.tsx) is hidden until SJC Parivaar launches.
// Keep this list in sync with `pages` in data/seo.ts, which drives the nav and the
// per-page HTML files generated at build time.
export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <SeoSchema />
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="capabilities" element={<CapabilitiesPage />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
