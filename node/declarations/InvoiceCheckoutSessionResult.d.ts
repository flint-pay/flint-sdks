
import type { CheckoutSession } from './CheckoutSession.js';
import type { HostedCheckout } from './HostedCheckout.js';
import type { Invoice } from './Invoice.js';
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';

export type InvoiceCheckoutSessionResult = { "checkout_session": CheckoutSession; "hosted_checkout": HostedCheckout; "invoice": Invoice; "invoice_payment_attempt"?: InvoicePaymentAttempt; "reused_existing": boolean; };
