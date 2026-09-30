
import type { Invoice } from './Invoice.js';
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';

export type CollectInvoiceResult = { "idempotency_key": string; "invoice": Invoice; "invoice_payment_attempt"?: InvoicePaymentAttempt; };
