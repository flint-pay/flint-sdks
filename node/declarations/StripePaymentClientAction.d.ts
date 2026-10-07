
import type { StripePaymentIntentClientAction } from './StripePaymentIntentClientAction.js';
import type { StripeSetupIntentClientAction } from './StripeSetupIntentClientAction.js';

/** Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present. */ export type StripePaymentClientAction = { /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */ "account_id": string; /** PaymentIntent authority for an order payment authentication action. */ "payment_intent"?: StripePaymentIntentClientAction; /** Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. */ "publishable_key": string; /** SetupIntent authority for a saved-payment-method authentication action. */ "setup_intent"?: StripeSetupIntentClientAction; };
