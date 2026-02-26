import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { CarModel } from '@/content/carModels';
import { getShowroomForCar } from '@/content/showrooms';
import { ShowroomPanel } from './ShowroomPanel';
import { CheckoutFlow } from './CheckoutFlow';

interface CheckoutModalProps {
  car: CarModel | null;
  open: boolean;
  onClose: () => void;
}

export function CheckoutModal({ car, open, onClose }: CheckoutModalProps) {
  if (!car) return null;

  const showroom = getShowroomForCar(car.id);
  const isLuxury = car.category === 'Luxury';

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-4xl w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto"
        style={
          isLuxury
            ? {
                background: 'oklch(var(--luxury-bg-deep))',
                border: '1px solid oklch(0.78 0.12 85 / 0.25)',
                borderRadius: '0',
              }
            : {}
        }
      >
        {/* Hidden accessible title */}
        <DialogTitle className="sr-only">
          Checkout — {car.name}
        </DialogTitle>

        {/* Custom header */}
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={
            isLuxury
              ? {
                  borderBottom: '1px solid oklch(0.78 0.12 85 / 0.18)',
                }
              : { borderBottom: '1px solid hsl(var(--border))' }
          }
        >
          {isLuxury ? (
            <div>
              <p
                className="text-[9px] uppercase tracking-[0.28em] mb-0.5"
                style={{ color: 'oklch(var(--luxury-gold-dim))' }}
              >
                Checkout
              </p>
              <h2
                className="text-lg font-light"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  color: 'oklch(var(--luxury-text))',
                }}
              >
                {car.name}
              </h2>
            </div>
          ) : (
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Checkout</p>
              <h2 className="text-lg font-bold text-foreground">{car.name}</h2>
            </div>
          )}

          <button
            onClick={onClose}
            className="p-2 transition-colors rounded-full"
            style={
              isLuxury
                ? { color: 'oklch(var(--luxury-text-muted))' }
                : {}
            }
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body: two-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-0">
          {/* Left: Checkout flow */}
          <div
            className="p-6"
            style={
              isLuxury
                ? { borderRight: '1px solid oklch(0.78 0.12 85 / 0.15)' }
                : { borderRight: '1px solid hsl(var(--border) / 0.5)' }
            }
          >
            <CheckoutFlow car={car} onClose={onClose} isLuxury={isLuxury} />
          </div>

          {/* Right: Showroom panel */}
          <div className="p-6 flex flex-col gap-4">
            {/* Car thumbnail */}
            <div className="w-full aspect-[16/9] overflow-hidden rounded-sm">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <ShowroomPanel showroom={showroom} isLuxury={isLuxury} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
