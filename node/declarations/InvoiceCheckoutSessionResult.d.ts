
import type { CheckoutAccess } from './CheckoutAccess.js';
import type { CheckoutSession } from './CheckoutSession.js';
import type { Invoice } from './Invoice.js';
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';

export type InvoiceCheckoutSessionResult = { "checkout_access": CheckoutAccess; "checkout_session": CheckoutSession; /** Deprecated and will be removed. Use checkout_session.url and checkout_access.checkout_auth_token. */ "hosted_checkout"?: { /** Same value as checkout_access.checkout_auth_token. */ "checkout_auth_token": string; /** Same value as checkout_session.url. */ "url": string; }; "invoice": Invoice; "invoice_payment_attempt"?: InvoicePaymentAttempt; /** True when an existing checkout of the requested surface was reused. For POST /v1/checkout-sessions, true only when a retry with the original Idempotency-Key returns the session that request created. */ "reused_existing": boolean; };
