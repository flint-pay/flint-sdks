
import type { StripeClientSetupStripeInput } from './StripeClientSetupStripeInput.js';

/** Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret. */ export type StripeClientSetupInput = { "stripe"?: StripeClientSetupStripeInput; };
