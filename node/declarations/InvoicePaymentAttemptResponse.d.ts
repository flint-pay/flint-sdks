
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoicePaymentAttemptResponse = { "data": InvoicePaymentAttempt; "meta"?: ResponseMeta; "request_id"?: string; };
