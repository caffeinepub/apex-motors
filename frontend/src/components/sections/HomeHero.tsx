import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HomeHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/apex-hero-bg.dim_1920x1080.jpg"
          alt="HOOD Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
            For those who dare
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Experience unparalleled engineering, cutting-edge technology, and breathtaking design. 
            HOOD redefines what's possible on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('models')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6"
            >
              Explore Models
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 border-2"
            >
              Book Test Drive
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
