import { SiteLayout } from '@/components/layout/SiteLayout';
import { CategoryTabs } from '@/components/models/CategoryTabs';
import { CarModelCard } from '@/components/models/CarModelCard';
import { vintageModels, sportsModels, luxuryModels } from '@/content/carModels';
import { Clock, Zap, Crown } from 'lucide-react';

interface StandardSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentWord: string;
  cars: typeof vintageModels;
}

function StandardCarSection({ id, icon, title, subtitle, accentWord, cars }: StandardSectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-accent">{icon}</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            {title.split(accentWord).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-accent">{accentWord}</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <div className="mt-4 h-px w-24 bg-accent/60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cars.map((car) => (
            <CarModelCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LuxuryCarSection() {
  return (
    <section
      id="section-luxury"
      className="py-24 scroll-mt-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, oklch(0.06 0.010 255) 0%, oklch(0.04 0.008 252) 100%)' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 40% at 50% 0%, oklch(0.78 0.12 85 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury section header */}
        <div className="mb-16 text-center">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-16"
              style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.12 85 / 0.60))' }}
            />
            <Crown
              className="h-5 w-5"
              style={{ color: 'oklch(0.78 0.12 85)' }}
            />
            <div
              className="h-px w-16"
              style={{ background: 'linear-gradient(90deg, oklch(0.78 0.12 85 / 0.60), transparent)' }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-xs uppercase mb-3"
            style={{
              color: 'oklch(0.78 0.12 85)',
              letterSpacing: '0.30em',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 500,
            }}
          >
            Prestige Collection
          </p>

          {/* Title */}
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: 'oklch(0.92 0.005 80)',
              letterSpacing: '0.06em',
            }}
          >
            <span style={{ color: 'oklch(0.78 0.12 85)' }}>Luxury</span> Cars
          </h2>

          {/* Subtitle description */}
          <p
            className="text-sm max-w-md mx-auto mb-6"
            style={{
              color: 'oklch(0.55 0.008 80)',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1rem',
              lineHeight: '1.7',
              letterSpacing: '0.02em',
            }}
          >
            Masterpieces of engineering and artistry, crafted for those who demand nothing less than perfection.
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: 'oklch(0.78 0.12 85 / 0.35)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: 'oklch(0.78 0.12 85 / 0.60)' }} />
            <div className="h-px w-24" style={{ background: 'oklch(0.78 0.12 85 / 0.60)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: 'oklch(0.78 0.12 85 / 0.60)' }} />
            <div className="h-px w-8" style={{ background: 'oklch(0.78 0.12 85 / 0.35)' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {luxuryModels.map((car) => (
            <CarModelCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModelsPage() {
  return (
    <SiteLayout>
      {/* Page hero */}
      <div className="relative py-20 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.55_0.24_12_/_0.12),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Full Catalogue
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Our <span className="text-accent">Models</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Thirty handpicked machines across three eras of automotive passion. Every price shown
            includes a full GST breakdown.
          </p>
        </div>
      </div>

      {/* Sticky category tabs */}
      <CategoryTabs />

      {/* Vintage section */}
      <StandardCarSection
        id="section-vintage"
        icon={<Clock className="h-5 w-5" />}
        title="Vintage Cars"
        subtitle="Heritage Collection"
        accentWord="Vintage"
        cars={vintageModels}
      />

      <div className="border-t border-border/30" />

      {/* Sports section */}
      <StandardCarSection
        id="section-sports"
        icon={<Zap className="h-5 w-5" />}
        title="Sports Cars"
        subtitle="Performance Series"
        accentWord="Sports"
        cars={sportsModels}
      />

      {/* Luxury section — full premium treatment */}
      <LuxuryCarSection />
    </SiteLayout>
  );
}
