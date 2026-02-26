import { useEffect, useRef, useState } from 'react';

type Category = 'vintage' | 'sports' | 'luxury';

interface Tab {
  id: Category;
  label: string;
  sectionId: string;
}

const TABS: Tab[] = [
  { id: 'vintage', label: 'Vintage Cars', sectionId: 'section-vintage' },
  { id: 'sports', label: 'Sports Cars', sectionId: 'section-sports' },
  { id: 'luxury', label: 'Luxury Cars', sectionId: 'section-luxury' },
];

export function CategoryTabs() {
  const [active, setActive] = useState<Category>('vintage');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Highlight the tab whose section is most visible in the viewport
  useEffect(() => {
    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tab = TABS.find((t) => t.sectionId === entry.target.id);
            if (tab) setActive(tab.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    TABS.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const scrollTo = (tab: Tab) => {
    setActive(tab.id);
    const el = document.getElementById(tab.sectionId);
    if (el) {
      // Offset for sticky header (80px) + sticky tab bar (64px)
      const offset = 80 + 64;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-20 z-40 w-full bg-background/95 backdrop-blur border-b border-border/40 supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 h-16 overflow-x-auto scrollbar-none">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            const isLuxury = tab.id === 'luxury';

            if (isLuxury) {
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab)}
                  className="relative shrink-0 px-5 py-2 text-sm transition-all duration-300"
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(135deg, oklch(0.14 0.015 252), oklch(0.10 0.012 255))',
                          color: 'oklch(0.78 0.12 85)',
                          border: '1px solid oklch(0.78 0.12 85 / 0.50)',
                          boxShadow: '0 0 20px -4px oklch(0.78 0.12 85 / 0.30)',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontWeight: 500,
                          letterSpacing: '0.06em',
                          fontSize: '0.875rem',
                        }
                      : {
                          background: 'transparent',
                          color: 'oklch(0.55 0.008 80)',
                          border: '1px solid transparent',
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontWeight: 400,
                          letterSpacing: '0.04em',
                          fontSize: '0.875rem',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'oklch(0.78 0.12 85)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.78 0.12 85 / 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'oklch(0.55 0.008 80)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                    }
                  }}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rotate-45"
                      style={{ background: 'oklch(0.78 0.12 85)', bottom: '-2px' }}
                    />
                  )}
                </button>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab)}
                className={[
                  'relative shrink-0 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200',
                  isActive
                    ? 'bg-accent text-black shadow-[0_0_16px_-2px_oklch(0.55_0.24_12_/_0.5)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary',
                ].join(' ')}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute inset-0 rounded-full ring-1 ring-accent/60 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
