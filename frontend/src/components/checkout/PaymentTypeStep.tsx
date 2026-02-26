import { CarModel } from '@/content/carModels';
import { Button } from '@/components/ui/button';

interface PaymentTypeStepProps {
  car: CarModel;
  totalPrice: number;
  selected: 'full' | 'booking';
  onSelect: (type: 'full' | 'booking') => void;
  onContinue: () => void;
  isLuxury?: boolean;
}

const BOOKING_AMOUNT = 200000;

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PaymentTypeStep({
  car,
  totalPrice,
  selected,
  onSelect,
  onContinue,
  isLuxury = false,
}: PaymentTypeStepProps) {
  const options: { id: 'full' | 'booking'; label: string; sublabel: string; amount: number; badge?: string }[] = [
    {
      id: 'full',
      label: 'Full Payment',
      sublabel: 'Pay the complete amount now. EMI options available.',
      amount: totalPrice,
      badge: 'EMI Available',
    },
    {
      id: 'booking',
      label: 'Booking Amount',
      sublabel: 'Reserve your vehicle with a refundable deposit. Balance due at delivery.',
      amount: BOOKING_AMOUNT,
      badge: 'Refundable',
    },
  ];

  if (isLuxury) {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <h2
            className="text-xl font-light mb-1"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: 'oklch(var(--luxury-text))' }}
          >
            Select Payment Type
          </h2>
          <p className="text-xs uppercase tracking-widest" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
            {car.name}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onSelect(opt.id)}
                className="text-left p-4 transition-all duration-200 rounded-none"
                style={{
                  background: isSelected ? 'oklch(0.78 0.12 85 / 0.08)' : 'oklch(var(--luxury-bg))',
                  border: isSelected
                    ? '1px solid oklch(0.78 0.12 85 / 0.60)'
                    : '1px solid oklch(0.78 0.12 85 / 0.18)',
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                      style={{
                        borderColor: isSelected ? 'oklch(var(--luxury-gold))' : 'oklch(0.78 0.12 85 / 0.35)',
                      }}
                    >
                      {isSelected && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: 'oklch(var(--luxury-gold))' }}
                        />
                      )}
                    </div>
                    <div>
                      <p
                        className="font-medium text-sm"
                        style={{ color: isSelected ? 'oklch(var(--luxury-gold))' : 'oklch(var(--luxury-text))' }}
                      >
                        {opt.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
                        {opt.sublabel}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className="font-semibold text-sm"
                      style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        color: 'oklch(var(--luxury-gold))',
                      }}
                    >
                      {formatINR(opt.amount)}
                    </p>
                    {opt.badge && (
                      <span
                        className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 mt-1 inline-block"
                        style={{
                          color: 'oklch(var(--luxury-gold-dim))',
                          border: '1px solid oklch(0.78 0.12 85 / 0.25)',
                        }}
                      >
                        {opt.badge}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={onContinue}
          className="w-full py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-200"
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
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Select Payment Type</h2>
        <p className="text-sm text-muted-foreground">{car.name}</p>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-accent bg-accent/10'
                  : 'border-border bg-muted/30 hover:border-accent/50'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-accent' : 'border-muted-foreground/40'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-accent" />}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                      {opt.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{opt.sublabel}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-sm text-accent">{formatINR(opt.amount)}</p>
                  {opt.badge && (
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground border border-border/60 px-1.5 py-0.5 mt-1 inline-block rounded">
                      {opt.badge}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Button onClick={onContinue} className="w-full">
        Continue
      </Button>
    </div>
  );
}
