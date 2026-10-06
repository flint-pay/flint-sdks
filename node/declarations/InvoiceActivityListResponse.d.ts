
import type { InvoiceActivity } from './InvoiceActivity.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoiceActivityListResponse = { "data": Array<InvoiceActivity>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
