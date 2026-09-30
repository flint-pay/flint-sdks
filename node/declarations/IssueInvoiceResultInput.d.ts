
import type { InvoiceDeliveryAttemptInput } from './InvoiceDeliveryAttemptInput.js';
import type { InvoiceInput } from './InvoiceInput.js';

export type IssueInvoiceResultInput = { "delivery_attempt"?: InvoiceDeliveryAttemptInput; "invoice": InvoiceInput; "public_url"?: string; };
