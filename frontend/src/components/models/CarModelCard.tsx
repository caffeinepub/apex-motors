import { useState } from 'react';
import { CarModel } from '@/content/carModels';
import { Gauge } from 'lucide-react';
import { CheckoutModal } from '@/components/checkout/CheckoutModal';

interface CarModelCardProps {
  car: CarModel;
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CarModelCard({ car }: CarModelCardProps) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const gst = Math.round(car.basePriceINR * 0.18);
  const total = car.basePriceINR + gst;
  const isLuxury = car.category === 'Luxury';

  if (isLuxury) {
    return (
      <>
        <article
          className="group relative flex flex-col overflow-hidden rounded-none transition-all duration-500"
          style={{
            background: 'oklch(var(--luxury-bg-deep))',
            boxShadow: '0 8px 40px -8px oklch(0.78 0.12 85 / 0.15), 0 0 0 1px oklch(0.78 0.12 85 / 0.18)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 16px 60px -8px oklch(0.78 0.12 85 / 0.30), 0 0 0 1px oklch(0.78 0.12 85 / 0.40)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 8px 40px -8px oklch(0.78 0.12 85 / 0.15), 0 0 0 1px oklch(0.78 0.12 85 / 0.18)';
          }}
        >
          {/* Top gold accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.12 85), transparent)' }}
          />

          {/* Car image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ background: 'oklch(var(--luxury-bg))' }}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Gradient overlay for depth */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, oklch(var(--luxury-bg-deep)) 0%, transparent 50%)' }}
            />
            {/* Category badge */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className="text-[9px] font-semibold uppercase tracking-[0.22em] px-2.5 py-1"
                style={{
                  background: 'oklch(0.05 0.01 255 / 0.85)',
                  color: 'oklch(var(--luxury-gold))',
                  border: '1px solid oklch(0.78 0.12 85 / 0.40)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {car.category}
              </span>
            </div>
          </div>

          {/* Card body */}
          <div className="p-7 flex flex-col flex-1">
            {/* Decorative top ornament */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.25)' }} />
              <div className="w-1 h-1 rotate-45" style={{ background: 'oklch(var(--luxury-gold))' }} />
              <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.25)' }} />
            </div>

            {/* Name */}
            <h3
              className="text-xl font-light leading-tight mb-2 tracking-wide transition-colors duration-300"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                color: 'oklch(var(--luxury-text))',
                letterSpacing: '0.04em',
              }}
            >
              <span
                style={{ color: 'oklch(var(--luxury-text))' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'oklch(var(--luxury-gold))';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'oklch(var(--luxury-text))';
                }}
              >
                {car.name}
              </span>
            </h3>

            {/* Specs */}
            <div className="flex items-center gap-2 mb-4">
              <Gauge className="h-3 w-3 shrink-0" style={{ color: 'oklch(var(--luxury-gold-dim))' }} />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: 'oklch(var(--luxury-text-muted))', letterSpacing: '0.14em' }}
              >
                {car.specs}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{
                color: 'oklch(var(--luxury-text-muted))',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '0.95rem',
                lineHeight: '1.7',
              }}
            >
              {car.description}
            </p>

            {/* Pricing breakdown */}
            <div
              className="mt-auto pt-5 space-y-2"
              style={{ borderTop: '1px solid oklch(0.78 0.12 85 / 0.20)' }}
            >
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: 'oklch(var(--luxury-text-muted))' }}>Base Price</span>
                <span style={{ color: 'oklch(var(--luxury-text))' }} className="font-medium">
                  {formatINR(car.basePriceINR)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: 'oklch(var(--luxury-text-muted))' }}>GST (18%)</span>
                <span style={{ color: 'oklch(var(--luxury-gold-dim))' }} className="font-medium">
                  + {formatINR(gst)}
                </span>
              </div>
              <div
                className="flex justify-between items-center pt-3"
                style={{ borderTop: '1px solid oklch(0.78 0.12 85 / 0.15)' }}
              >
                <span
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{
                    color: 'oklch(var(--luxury-text-muted))',
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    letterSpacing: '0.18em',
                  }}
                >
                  Total
                </span>
                <span
                  className="text-lg font-semibold"
                  style={{
                    color: 'oklch(var(--luxury-gold))',
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                  }}
                >
                  {formatINR(total)}
                </span>
              </div>
            </div>

            {/* Buy Now button — luxury style */}
            <button
              onClick={() => setCheckoutOpen(true)}
              className="mt-5 w-full py-3 text-sm font-medium uppercase tracking-[0.22em] transition-all duration-200"
              style={{
                background: 'oklch(0.78 0.12 85)',
                color: 'oklch(0.10 0.02 255)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.85 0.10 85)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.78 0.12 85)';
              }}
            >
              Buy Now
            </button>
          </div>

          {/* Bottom gold accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.12 85 / 0.40), transparent)' }}
          />
        </article>

        <CheckoutModal car={car} open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      </>
    );
  }

  // Default card for Vintage and Sports
  return (
    <>
      <article className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_-5px_oklch(0.55_0.24_12_/_0.25)]">
        {/* Car image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge overlaid on image */}
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-black/60 text-accent border border-accent/40 backdrop-blur-sm">
              {car.category}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Name */}
          <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-accent transition-colors">
            {car.name}
          </h3>

          {/* Specs pill */}
          <div className="flex items-center gap-1.5 mb-3">
            <Gauge className="h-3.5 w-3.5 text-accent shrink-0" />
            <span className="text-xs text-muted-foreground font-medium">{car.specs}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
            {car.description}
          </p>

          {/* Pricing breakdown */}
          <div className="mt-auto border-t border-border/60 pt-4 space-y-1.5">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Base Price</span>
              <span className="text-foreground font-medium">{formatINR(car.basePriceINR)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">GST (18%)</span>
              <span className="text-accent font-medium">+ {formatINR(gst)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-border/40">
              <span className="text-sm font-bold text-foreground uppercase tracking-wide">Total</span>
              <span className="text-base font-bold text-accent">{formatINR(total)}</span>
            </div>
          </div>

          {/* Buy Now button */}
          <button
            onClick={() => setCheckoutOpen(true)}
            className="mt-5 w-full py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest bg-accent text-white transition-all duration-200 hover:bg-accent/85 active:scale-[0.98]"
          >
            Buy Now
          </button>
        </div>
      </article>

      <CheckoutModal car={car} open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}
