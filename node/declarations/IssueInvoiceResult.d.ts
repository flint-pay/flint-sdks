
import type { Invoice } from './Invoice.js';
import type { InvoiceDeliveryAttempt } from './InvoiceDeliveryAttempt.js';

export type IssueInvoiceResult = { "delivery_attempt"?: InvoiceDeliveryAttempt; "invoice": Invoice; "public_url"?: string; };
