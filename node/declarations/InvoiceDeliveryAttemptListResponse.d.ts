
import type { InvoiceDeliveryAttempt } from './InvoiceDeliveryAttempt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoiceDeliveryAttemptListResponse = { "data": Array<InvoiceDeliveryAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
