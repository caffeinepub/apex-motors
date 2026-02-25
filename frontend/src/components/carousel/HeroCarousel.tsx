import { useEffect, useCallback, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="relative w-screen -mt-20 h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {/* Slide 1: Futuristic Car 1 */}
          <CarouselItem className="h-full pl-0">
            <div className="relative w-full h-screen overflow-hidden">
              <img
                src="/assets/generated/futuristic-car-1.dim_1920x1080.png"
                alt="Futuristic electric vehicle with sleek aerodynamic design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                <div className="container mx-auto">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-4">
                    The Future is Now
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 max-w-2xl">
                    Experience tomorrow's automotive technology today
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Futuristic Car 2 */}
          <CarouselItem className="h-full pl-0">
            <div className="relative w-full h-screen overflow-hidden">
              <img
                src="/assets/generated/futuristic-car-2.dim_1920x1080.png"
                alt="Advanced futuristic vehicle with innovative design elements"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                <div className="container mx-auto">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent mb-4">
                    Redefining Performance
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 max-w-2xl">
                    Where cutting-edge engineering meets uncompromising style
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3: Text-based promotional content */}
          <CarouselItem className="h-full pl-0">
            <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
              {/* Geometric background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-accent/20 rounded-full" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center p-8 sm:p-12 lg:p-16">
                <div className="text-center max-w-4xl">
                  <div className="inline-block mb-6 px-6 py-2 border border-accent/30 rounded-full">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                      Limited Edition
                    </span>
                  </div>
                  <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-accent mb-6 leading-tight">
                    Drive the Revolution
                  </h2>
                  <p className="text-xl sm:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
                    Join the elite few who dare to push boundaries.
                    Reserve your HOOD experience today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="px-10 py-5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg"
                    >
                      Reserve Now
                    </button>
                    <button
                      onClick={() => {
                        const element = document.getElementById('models');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="px-10 py-5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-lg"
                    >
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 sm:left-8 bg-background/80 border-accent/30 text-accent hover:bg-accent hover:text-background z-30" />
        <CarouselNext className="right-4 sm:right-8 bg-background/80 border-accent/30 text-accent hover:bg-accent hover:text-background z-30" />
      </Carousel>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? 'bg-accent w-10'
                : 'bg-foreground/30 hover:bg-foreground/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
