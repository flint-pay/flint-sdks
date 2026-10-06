
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { InvoiceInput } from './InvoiceInput.js';
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';

export type InvoiceCheckoutSessionResultInput = { /** Checkout credential and, for hosted checkout, its launch URL. Keep the checkout credential on your backend. */ "checkout_access": { "checkout_auth_token": string; "hosted_url"?: string; }; "checkout_session": CheckoutSessionInput; /** Deprecated. Use checkout_access. Present only for hosted checkout. */ "hosted_checkout"?: { /** Checkout-session auth token for clients that operate the created checkout session directly. The hosted URL uses a separate launch credential. */ "checkout_auth_token": string; /** Hosted checkout URL for the created or reused checkout session. */ "url": string; }; "invoice": InvoiceInput; "invoice_payment_attempt"?: InvoicePaymentAttemptInput; /** True when an existing checkout of the requested surface was reused. For POST /v1/checkout-sessions, true only when a retry with the original Idempotency-Key returns the session that request created. */ "reused_existing": boolean; };
