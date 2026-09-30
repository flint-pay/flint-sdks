
import type { StripeClientAuthorityInput } from './StripeClientAuthorityInput.js';

/** Stripe.js initialization context and SetupIntent setup authority. */ export type StripeClientSetupStripeInput = { /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */ "account_id"?: string; /** Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. */ "publishable_key"?: string; "setup_intent"?: StripeClientAuthorityInput; };
