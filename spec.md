# Specification

## Summary
**Goal:** Add a "Buy Now" checkout flow to each car model card, including EMI/booking options, a payment form, and nearest showroom details per car.

**Planned changes:**
- Add a "Buy Now" button to each `CarModelCard.tsx` that opens a checkout modal for that specific car
- Implement a multi-step checkout flow inside the modal:
  - Step 1: Choose payment type — full price or booking amount (₹2,00,000 deposit)
  - Step 2 (if full price): Select EMI plan (6, 12, or 24 months) with calculated monthly instalment in INR
  - Step 3: Payment form with card fields (card number, name, expiry, CVV) or UPI ID alternative
  - Final screen: Simulated success confirmation with order summary
- Display a "Nearest Showroom" panel inside the checkout modal showing showroom name, full address, city, and a fake Indian contact number; visible alongside the checkout form (side-by-side on desktop, stacked on mobile)
- Create `frontend/src/content/showrooms.ts` mapping each car model ID to a unique showroom in a different Indian city (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, etc.)
- All prices and amounts displayed in INR (₹); no real payment processing

**User-visible outcome:** Users can click "Buy Now" on any car card, go through a simulated checkout selecting payment type and EMI options, enter mock payment details, and see a confirmation screen — alongside the nearest showroom's contact details for that car.
