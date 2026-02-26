import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router';
import { SiteLayout } from './components/layout/SiteLayout';
import { HeroCarousel } from './components/carousel/HeroCarousel';
import { HomeHero } from './components/sections/HomeHero';
import { ModelsSection } from './components/sections/ModelsSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ModelsPage } from './pages/ModelsPage';

function HomePage() {
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

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const modelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/models',
  component: ModelsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, modelsRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
