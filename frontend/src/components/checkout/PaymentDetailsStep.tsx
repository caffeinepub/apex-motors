import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

type PaymentMethod = 'card' | 'upi';

interface PaymentDetailsStepProps {
  paymentType: 'full' | 'booking';
  amountDue: number;
  onBack: () => void;
  onSuccess: () => void;
  isLuxury?: boolean;
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2);
  return digits;
}

export function PaymentDetailsStep({
  paymentType,
  amountDue,
  onBack,
  onSuccess,
  isLuxury = false,
}: PaymentDetailsStepProps) {
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (method === 'card') {
      const rawCard = cardNumber.replace(/\s/g, '');
      if (rawCard.length !== 16) errs.cardNumber = 'Enter a valid 16-digit card number';
      if (!cardName.trim()) errs.cardName = 'Cardholder name is required';
      const expiryParts = expiry.split('/');
      if (expiryParts.length !== 2 || expiryParts[0].length !== 2 || expiryParts[1].length !== 2) {
        errs.expiry = 'Enter expiry as MM/YY';
      }
      if (cvv.length !== 3) errs.cvv = 'Enter a valid 3-digit CVV';
    } else {
      if (!upiId.includes('@')) errs.upiId = 'Enter a valid UPI ID (e.g. name@upi)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsProcessing(false);
    onSuccess();
  }

  const inputStyle = isLuxury
    ? {
        background: 'oklch(var(--luxury-bg))',
        border: '1px solid oklch(0.78 0.12 85 / 0.25)',
        color: 'oklch(var(--luxury-text))',
        borderRadius: '0',
      }
    : {};

  const labelStyle = isLuxury
    ? { color: 'oklch(var(--luxury-text-muted))', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const }
    : {};

  const errorStyle = isLuxury
    ? { color: 'oklch(0.65 0.20 25)', fontSize: '0.7rem' }
    : {};

  return (
    <div className="flex flex-col gap-5">
      <div>
        {isLuxury ? (
          <>
            <h2
              className="text-xl font-light mb-1"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: 'oklch(var(--luxury-text))' }}
            >
              Payment Details
            </h2>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'oklch(var(--luxury-text-muted))' }}>
              Amount Due: {formatINR(amountDue)}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-foreground mb-1">Payment Details</h2>
            <p className="text-sm text-muted-foreground">Amount Due: {formatINR(amountDue)}</p>
          </>
        )}
      </div>

      {/* Method toggle */}
      <div className="flex gap-2">
        {(['card', 'upi'] as PaymentMethod[]).map((m) => {
          const isActive = method === m;
          if (isLuxury) {
            return (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className="flex-1 py-2 text-xs uppercase tracking-widest transition-all duration-200"
                style={{
                  background: isActive ? 'oklch(0.78 0.12 85 / 0.12)' : 'transparent',
                  border: isActive ? '1px solid oklch(0.78 0.12 85 / 0.55)' : '1px solid oklch(0.78 0.12 85 / 0.18)',
                  color: isActive ? 'oklch(var(--luxury-gold))' : 'oklch(var(--luxury-text-muted))',
                }}
              >
                {m === 'card' ? 'Card' : 'UPI'}
              </button>
            );
          }
          return (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg border-2 transition-all duration-200 ${
                isActive ? 'border-accent bg-accent/10 text-accent' : 'border-border text-muted-foreground hover:border-accent/50'
              }`}
            >
              {m === 'card' ? 'Card' : 'UPI'}
            </button>
          );
        })}
      </div>

      {method === 'card' ? (
        <div className="flex flex-col gap-4">
          <div>
            <Label style={labelStyle}>Card Number</Label>
            <Input
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              style={inputStyle}
              className={isLuxury ? 'rounded-none mt-1' : 'mt-1'}
            />
            {errors.cardNumber && <p className="text-xs text-destructive mt-1" style={errorStyle}>{errors.cardNumber}</p>}
          </div>
          <div>
            <Label style={labelStyle}>Cardholder Name</Label>
            <Input
              placeholder="As on card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              style={inputStyle}
              className={isLuxury ? 'rounded-none mt-1' : 'mt-1'}
            />
            {errors.cardName && <p className="text-xs text-destructive mt-1" style={errorStyle}>{errors.cardName}</p>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label style={labelStyle}>Expiry (MM/YY)</Label>
              <Input
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                style={inputStyle}
                className={isLuxury ? 'rounded-none mt-1' : 'mt-1'}
              />
              {errors.expiry && <p className="text-xs text-destructive mt-1" style={errorStyle}>{errors.expiry}</p>}
            </div>
            <div>
              <Label style={labelStyle}>CVV</Label>
              <Input
                placeholder="•••"
                type="password"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                style={inputStyle}
                className={isLuxury ? 'rounded-none mt-1' : 'mt-1'}
              />
              {errors.cvv && <p className="text-xs text-destructive mt-1" style={errorStyle}>{errors.cvv}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Label style={labelStyle}>UPI ID</Label>
          <Input
            placeholder="yourname@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            style={inputStyle}
            className={isLuxury ? 'rounded-none mt-1' : 'mt-1'}
          />
          {errors.upiId && <p className="text-xs text-destructive mt-1" style={errorStyle}>{errors.upiId}</p>}
        </div>
      )}

      <div className="flex gap-3 mt-1">
        {isLuxury ? (
          <>
            <button
              onClick={onBack}
              disabled={isProcessing}
              className="flex-1 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-200 disabled:opacity-50"
              style={{
                background: 'transparent',
                color: 'oklch(var(--luxury-text-muted))',
                border: '1px solid oklch(0.78 0.12 85 / 0.25)',
              }}
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="flex-1 py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
              style={{ background: 'oklch(0.78 0.12 85)', color: 'oklch(0.10 0.02 255)' }}
              onMouseEnter={(e) => {
                if (!isProcessing) (e.currentTarget as HTMLElement).style.background = 'oklch(0.85 0.10 85)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'oklch(0.78 0.12 85)';
              }}
            >
              {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={onBack} disabled={isProcessing} className="flex-1">
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={isProcessing} className="flex-1 gap-2">
              {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
