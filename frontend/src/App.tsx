import { SiteLayout } from './components/layout/SiteLayout';
import { HeroCarousel } from './components/carousel/HeroCarousel';
import { HomeHero } from './components/sections/HomeHero';
import { ModelsSection } from './components/sections/ModelsSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <SiteLayout>
      <HeroCarousel />
      <HomeHero />
      <ModelsSection />
      <TechnologySection />
      <AboutSection />
      <ContactSection />
    </SiteLayout>
  );
}

export default App;
