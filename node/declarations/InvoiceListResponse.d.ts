
import type { Invoice } from './Invoice.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoiceListResponse = { "data": Array<Invoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
