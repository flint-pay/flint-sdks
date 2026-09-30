
import type { InvoiceEvent } from './InvoiceEvent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoiceEventListResponse = { "data": Array<InvoiceEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
