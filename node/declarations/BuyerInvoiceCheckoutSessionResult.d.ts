
import type { BuyerInvoice } from './BuyerInvoice.js';
import type { CheckoutSession } from './CheckoutSession.js';
import type { HostedCheckout } from './HostedCheckout.js';
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';

export type BuyerInvoiceCheckoutSessionResult = { "checkout_session": CheckoutSession; "hosted_checkout": HostedCheckout; "invoice": BuyerInvoice; "invoice_payment_attempt"?: InvoicePaymentAttempt; "reused_existing": boolean; };
