
import type { BuyerInvoiceInput } from './BuyerInvoiceInput.js';
import type { CheckoutAccessInput } from './CheckoutAccessInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';

export type BuyerInvoiceCheckoutSessionResultInput = { "checkout_access": CheckoutAccessInput; "checkout_session": CheckoutSessionInput; "invoice": BuyerInvoiceInput; "invoice_payment_attempt"?: InvoicePaymentAttemptInput; /** True when an existing checkout of the requested surface was reused. For POST /v1/checkout-sessions, true only when a retry with the original Idempotency-Key returns the session that request created. */ "reused_existing": boolean; };
