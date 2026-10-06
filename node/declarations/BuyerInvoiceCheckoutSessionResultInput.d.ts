
import type { BuyerInvoiceInput } from './BuyerInvoiceInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { HostedCheckoutInput } from './HostedCheckoutInput.js';
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';

export type BuyerInvoiceCheckoutSessionResultInput = { "checkout_session": CheckoutSessionInput; "hosted_checkout": HostedCheckoutInput; "invoice": BuyerInvoiceInput; "invoice_payment_attempt"?: InvoicePaymentAttemptInput; "reused_existing": boolean; };
