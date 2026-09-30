
import type { InvoicePaymentTerm } from './InvoicePaymentTerm.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoicePaymentTermListResponse = { "data": Array<InvoicePaymentTerm>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
