
import type { InvoiceInput } from './InvoiceInput.js';
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';

export type CollectInvoiceResultInput = { "idempotency_key": string; "invoice": InvoiceInput; "invoice_payment_attempt"?: InvoicePaymentAttemptInput; };
