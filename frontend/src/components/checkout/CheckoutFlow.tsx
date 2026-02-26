import { useState } from 'react';
import { CarModel } from '@/content/carModels';
import { PaymentTypeStep } from './PaymentTypeStep';
import { EMIPlanStep } from './EMIPlanStep';
import { PaymentDetailsStep } from './PaymentDetailsStep';
import { CheckoutSuccess } from './CheckoutSuccess';

type Step = 'payment-type' | 'emi-plan' | 'payment-details' | 'success';

interface CheckoutFlowProps {
  car: CarModel;
  onClose: () => void;
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

const STEP_LABELS: Record<Step, string> = {
  'payment-type': 'Payment Type',
  'emi-plan': 'EMI Plan',
  'payment-details': 'Payment Details',
  success: 'Confirmation',
};

const STEP_ORDER: Step[] = ['payment-type', 'emi-plan', 'payment-details', 'success'];

export function CheckoutFlow({ car, onClose, isLuxury = false }: CheckoutFlowProps) {
  const [step, setStep] = useState<Step>('payment-type');
  const [paymentType, setPaymentType] = useState<'full' | 'booking'>('full');
  const [emiTenure, setEmiTenure] = useState<6 | 12 | 24>(12);

  const gst = Math.round(car.basePriceINR * 0.18);
  const totalPrice = car.basePriceINR + gst;
  const amountDue = paymentType === 'full' ? totalPrice : BOOKING_AMOUNT;

  const visibleSteps: Step[] =
    paymentType === 'full'
      ? ['payment-type', 'emi-plan', 'payment-details', 'success']
      : ['payment-type', 'payment-details', 'success'];

  const currentStepIndex = visibleSteps.indexOf(step);

  function handlePaymentTypeSelect(type: 'full' | 'booking') {
    setPaymentType(type);
  }

  function handlePaymentTypeContinue() {
    if (paymentType === 'full') {
      setStep('emi-plan');
    } else {
      setStep('payment-details');
    }
  }

  function handleEmiContinue() {
    setStep('payment-details');
  }

  function handlePaymentSuccess() {
    setStep('success');
  }

  const progressSteps = visibleSteps.filter((s) => s !== 'success');

  if (isLuxury) {
    return (
      <div className="flex flex-col gap-6">
        {/* Step progress — only show before success */}
        {step !== 'success' && (
          <div className="flex items-center gap-2">
            {progressSteps.map((s, i) => {
              const isDone = visibleSteps.indexOf(s) < currentStepIndex;
              const isCurrent = s === step;
              return (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 flex items-center justify-center text-[9px] font-bold"
                      style={{
                        background: isDone || isCurrent ? 'oklch(0.78 0.12 85)' : 'transparent',
                        border: isDone || isCurrent ? 'none' : '1px solid oklch(0.78 0.12 85 / 0.30)',
                        color: isDone || isCurrent ? 'oklch(0.10 0.02 255)' : 'oklch(var(--luxury-text-muted))',
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="text-[9px] uppercase tracking-widest hidden sm:block"
                      style={{
                        color: isCurrent ? 'oklch(var(--luxury-gold))' : 'oklch(var(--luxury-text-muted))',
                      }}
                    >
                      {STEP_LABELS[s]}
                    </span>
                  </div>
                  {i < progressSteps.length - 1 && (
                    <div
                      className="h-px flex-1"
                      style={{
                        background: isDone ? 'oklch(0.78 0.12 85 / 0.60)' : 'oklch(0.78 0.12 85 / 0.18)',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Step content */}
        {step === 'payment-type' && (
          <PaymentTypeStep
            car={car}
            totalPrice={totalPrice}
            selected={paymentType}
            onSelect={handlePaymentTypeSelect}
            onContinue={handlePaymentTypeContinue}
            isLuxury
          />
        )}
        {step === 'emi-plan' && (
          <EMIPlanStep
            totalPrice={totalPrice}
            selectedTenure={emiTenure}
            onSelect={setEmiTenure}
            onBack={() => setStep('payment-type')}
            onContinue={handleEmiContinue}
            isLuxury
          />
        )}
        {step === 'payment-details' && (
          <PaymentDetailsStep
            paymentType={paymentType}
            amountDue={amountDue}
            onBack={() => setStep(paymentType === 'full' ? 'emi-plan' : 'payment-type')}
            onSuccess={handlePaymentSuccess}
            isLuxury
          />
        )}
        {step === 'success' && (
          <CheckoutSuccess
            car={car}
            paymentType={paymentType}
            emiTenure={paymentType === 'full' ? emiTenure : undefined}
            amountPaid={amountDue}
            onClose={onClose}
            isLuxury
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Step progress */}
      {step !== 'success' && (
        <div className="flex items-center gap-2">
          {progressSteps.map((s, i) => {
            const isDone = visibleSteps.indexOf(s) < currentStepIndex;
            const isCurrent = s === step;
            return (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      isDone || isCurrent ? 'bg-accent text-white' : 'bg-muted text-muted-foreground border border-border'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-widest hidden sm:block ${
                      isCurrent ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {STEP_LABELS[s]}
                  </span>
                </div>
                {i < progressSteps.length - 1 && (
                  <div className={`h-px flex-1 ${isDone ? 'bg-accent/60' : 'bg-border'}`} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {step === 'payment-type' && (
        <PaymentTypeStep
          car={car}
          totalPrice={totalPrice}
          selected={paymentType}
          onSelect={handlePaymentTypeSelect}
          onContinue={handlePaymentTypeContinue}
        />
      )}
      {step === 'emi-plan' && (
        <EMIPlanStep
          totalPrice={totalPrice}
          selectedTenure={emiTenure}
          onSelect={setEmiTenure}
          onBack={() => setStep('payment-type')}
          onContinue={handleEmiContinue}
        />
      )}
      {step === 'payment-details' && (
        <PaymentDetailsStep
          paymentType={paymentType}
          amountDue={amountDue}
          onBack={() => setStep(paymentType === 'full' ? 'emi-plan' : 'payment-type')}
          onSuccess={handlePaymentSuccess}
        />
      )}
      {step === 'success' && (
        <CheckoutSuccess
          car={car}
          paymentType={paymentType}
          emiTenure={paymentType === 'full' ? emiTenure : undefined}
          amountPaid={amountDue}
          onClose={onClose}
        />
      )}
    </div>
  );
}
