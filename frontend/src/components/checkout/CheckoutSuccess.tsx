import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CarModel } from '@/content/carModels';

interface CheckoutSuccessProps {
  car: CarModel;
  paymentType: 'full' | 'booking';
  emiTenure?: 6 | 12 | 24;
  amountPaid: number;
  onClose: () => void;
  isLuxury?: boolean;
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function calcEMI(total: number, months: number): number {
  return Math.ceil(total / months);
}

export function CheckoutSuccess({
  car,
  paymentType,
  emiTenure,
  amountPaid,
  onClose,
  isLuxury = false,
}: CheckoutSuccessProps) {
  const orderId = `HOOD-${Date.now().toString(36).toUpperCase()}`;

  if (isLuxury) {
    return (
      <div className="flex flex-col items-center gap-6 py-4 text-center">
        {/* Success icon */}
        <div
          className="w-16 h-16 flex items-center justify-center"
          style={{ border: '1px solid oklch(0.78 0.12 85 / 0.40)' }}
        >
          <CheckCircle2 className="h-8 w-8" style={{ color: 'oklch(var(--luxury-gold))' }} />
        </div>

        <div>
          <h2
            className="text-2xl font-light mb-2"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: 'oklch(var(--luxury-text))' }}
          >
            Order Confirmed
          </h2>
          <p className="text-xs uppercase tracking-[0.22em]" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
            Thank you for choosing HOOD
          </p>
        </div>

        {/* Order summary */}
        <div
          className="w-full text-left p-5 space-y-3"
          style={{ border: '1px solid oklch(0.78 0.12 85 / 0.20)', background: 'oklch(var(--luxury-bg))' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.20)' }} />
            <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color: 'oklch(var(--luxury-gold-dim))' }}>
              Order Summary
            </span>
            <div className="h-px flex-1" style={{ background: 'oklch(0.78 0.12 85 / 0.20)' }} />
          </div>

          {[
            { label: 'Order ID', value: orderId },
            { label: 'Vehicle', value: car.name },
            {
              label: 'Payment Type',
              value: paymentType === 'full' ? 'Full Payment' : 'Booking Amount',
            },
            ...(emiTenure
              ? [
                  { label: 'EMI Plan', value: `${emiTenure} months` },
                  {
                    label: 'Monthly EMI',
                    value: formatINR(calcEMI(amountPaid, emiTenure)),
                  },
                ]
              : []),
            { label: 'Amount Paid', value: formatINR(amountPaid) },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center text-sm">
              <span style={{ color: 'oklch(var(--luxury-text-muted))' }}>{label}</span>
              <span
                className="font-medium"
                style={{
                  color: label === 'Amount Paid' ? 'oklch(var(--luxury-gold))' : 'oklch(var(--luxury-text))',
                  fontFamily: label === 'Amount Paid' ? '"Cormorant Garamond", Georgia, serif' : undefined,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
          Our concierge team will contact you within 24 hours to arrange delivery.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-200"
          style={{ background: 'oklch(0.78 0.12 85)', color: 'oklch(0.10 0.02 255)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'oklch(0.85 0.10 85)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'oklch(0.78 0.12 85)';
          }}
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
        <CheckCircle2 className="h-8 w-8 text-green-500" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Order Confirmed!</h2>
        <p className="text-sm text-muted-foreground">Thank you for choosing HOOD</p>
      </div>

      <div className="w-full text-left bg-muted/40 rounded-xl border border-border/60 p-5 space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Order Summary</p>
        {[
          { label: 'Order ID', value: orderId },
          { label: 'Vehicle', value: car.name },
          { label: 'Payment Type', value: paymentType === 'full' ? 'Full Payment' : 'Booking Amount' },
          ...(emiTenure
            ? [
                { label: 'EMI Plan', value: `${emiTenure} months` },
                { label: 'Monthly EMI', value: formatINR(calcEMI(amountPaid, emiTenure)) },
              ]
            : []),
          { label: 'Amount Paid', value: formatINR(amountPaid) },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{label}</span>
            <span className={`font-semibold ${label === 'Amount Paid' ? 'text-accent' : 'text-foreground'}`}>
              {value}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Our team will contact you within 24 hours to arrange delivery.
      </p>

      <Button onClick={onClose} className="w-full">
        Done
      </Button>
    </div>
  );
}
