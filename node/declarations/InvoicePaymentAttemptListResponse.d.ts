
import type { InvoicePaymentAttempt } from './InvoicePaymentAttempt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoicePaymentAttemptListResponse = { "data": Array<InvoicePaymentAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
