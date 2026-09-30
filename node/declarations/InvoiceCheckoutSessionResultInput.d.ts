
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { HostedCheckoutInput } from './HostedCheckoutInput.js';
import type { InvoiceInput } from './InvoiceInput.js';
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';

export type InvoiceCheckoutSessionResultInput = { "checkout_session": CheckoutSessionInput; "hosted_checkout": HostedCheckoutInput; "invoice": InvoiceInput; "invoice_payment_attempt"?: InvoicePaymentAttemptInput; "reused_existing": boolean; };
