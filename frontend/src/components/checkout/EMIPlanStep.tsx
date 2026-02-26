import { Button } from '@/components/ui/button';

interface EMIPlanStepProps {
  totalPrice: number;
  selectedTenure: 6 | 12 | 24;
  onSelect: (tenure: 6 | 12 | 24) => void;
  onBack: () => void;
  onContinue: () => void;
  isLuxury?: boolean;
}

const TENURES: (6 | 12 | 24)[] = [6, 12, 24];

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function calcEMI(total: number, months: number): number {
  // Simple mock EMI: total / months (no interest for simulation)
  return Math.ceil(total / months);
}

export function EMIPlanStep({
  totalPrice,
  selectedTenure,
  onSelect,
  onBack,
  onContinue,
  isLuxury = false,
}: EMIPlanStepProps) {
  const plans = TENURES.map((t) => ({
    tenure: t,
    monthly: calcEMI(totalPrice, t),
    label: t === 6 ? '6 Months' : t === 12 ? '12 Months' : '24 Months',
    sublabel: t === 6 ? 'Short-term, lower total' : t === 12 ? 'Most popular' : 'Lowest monthly outflow',
  }));

  if (isLuxury) {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <h2
            className="text-xl font-light mb-1"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: 'oklch(var(--luxury-text))' }}
          >
            Choose EMI Plan
          </h2>
          <p className="text-xs uppercase tracking-widest" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
            Total: {formatINR(totalPrice)}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {plans.map((plan) => {
            const isSelected = selectedTenure === plan.tenure;
            return (
              <button
                key={plan.tenure}
                onClick={() => onSelect(plan.tenure)}
                className="text-left p-4 transition-all duration-200 rounded-none"
                style={{
                  background: isSelected ? 'oklch(0.78 0.12 85 / 0.08)' : 'oklch(var(--luxury-bg))',
                  border: isSelected
                    ? '1px solid oklch(0.78 0.12 85 / 0.60)'
                    : '1px solid oklch(0.78 0.12 85 / 0.18)',
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                      style={{
                        borderColor: isSelected ? 'oklch(var(--luxury-gold))' : 'oklch(0.78 0.12 85 / 0.35)',
                      }}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full" style={{ background: 'oklch(var(--luxury-gold))' }} />
                      )}
                    </div>
                    <div>
                      <p
                        className="font-medium text-sm"
                        style={{ color: isSelected ? 'oklch(var(--luxury-gold))' : 'oklch(var(--luxury-text))' }}
                      >
                        {plan.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
                        {plan.sublabel}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className="font-semibold text-sm"
                      style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        color: 'oklch(var(--luxury-gold))',
                      }}
                    >
                      {formatINR(plan.monthly)}<span className="text-xs font-normal">/mo</span>
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'oklch(var(--luxury-text-muted))',
              border: '1px solid oklch(0.78 0.12 85 / 0.25)',
            }}
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="flex-1 py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-200"
            style={{ background: 'oklch(0.78 0.12 85)', color: 'oklch(0.10 0.02 255)' }}
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
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Choose EMI Plan</h2>
        <p className="text-sm text-muted-foreground">Total: {formatINR(totalPrice)}</p>
      </div>

      <div className="flex flex-col gap-3">
        {plans.map((plan) => {
          const isSelected = selectedTenure === plan.tenure;
          return (
            <button
              key={plan.tenure}
              onClick={() => onSelect(plan.tenure)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected ? 'border-accent bg-accent/10' : 'border-border bg-muted/30 hover:border-accent/50'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-accent' : 'border-muted-foreground/40'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-accent" />}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                      {plan.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{plan.sublabel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-accent">
                    {formatINR(plan.monthly)}<span className="text-xs font-normal text-muted-foreground">/mo</span>
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onContinue} className="flex-1">
          Continue
        </Button>
      </div>
    </div>
  );
}
