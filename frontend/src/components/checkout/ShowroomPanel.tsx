import { MapPin, Phone, Building2 } from 'lucide-react';
import { Showroom } from '@/content/showrooms';

interface ShowroomPanelProps {
  showroom: Showroom;
  isLuxury?: boolean;
}

export function ShowroomPanel({ showroom, isLuxury = false }: ShowroomPanelProps) {
  if (isLuxury) {
    return (
      <div
        className="rounded-none p-6 flex flex-col gap-4"
        style={{
          background: 'oklch(var(--luxury-bg-deep))',
          border: '1px solid oklch(0.78 0.12 85 / 0.25)',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.25)' }} />
          <div className="w-1 h-1 rotate-45" style={{ background: 'oklch(var(--luxury-gold))' }} />
          <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.25)' }} />
        </div>
        <h3
          className="text-xs uppercase tracking-[0.22em] text-center"
          style={{
            color: 'oklch(var(--luxury-gold))',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            letterSpacing: '0.22em',
          }}
        >
          Nearest Showroom
        </h3>

        {/* Showroom name */}
        <div className="flex items-start gap-3">
          <Building2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'oklch(var(--luxury-gold-dim))' }} />
          <div>
            <p
              className="font-medium leading-snug"
              style={{
                color: 'oklch(var(--luxury-text))',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1rem',
              }}
            >
              {showroom.name}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'oklch(var(--luxury-gold-dim))' }} />
          <div>
            <p className="text-sm leading-relaxed" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
              {showroom.address}
            </p>
            <p className="text-sm" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
              {showroom.city}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0" style={{ color: 'oklch(var(--luxury-gold-dim))' }} />
          <a
            href={`tel:${showroom.phone.replace(/\s/g, '')}`}
            className="text-sm font-medium transition-colors"
            style={{ color: 'oklch(var(--luxury-gold))' }}
          >
            {showroom.phone}
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center gap-3 mt-1">
          <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.20)' }} />
          <div className="w-1 h-1 rotate-45" style={{ background: 'oklch(0.78 0.12 85 / 0.40)' }} />
          <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.20)' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-5 flex flex-col gap-3 bg-muted/40 border border-border/60">
      <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Nearest Showroom</h3>

      <div className="flex items-start gap-3">
        <Building2 className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
        <p className="text-sm font-semibold text-foreground leading-snug">{showroom.name}</p>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
        <div>
          <p className="text-sm text-muted-foreground">{showroom.address}</p>
          <p className="text-sm text-muted-foreground">{showroom.city}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
        <a
          href={`tel:${showroom.phone.replace(/\s/g, '')}`}
          className="text-sm font-medium text-accent hover:underline"
        >
          {showroom.phone}
        </a>
      </div>
    </div>
  );
}
