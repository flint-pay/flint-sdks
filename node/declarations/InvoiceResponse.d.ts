
import type { Invoice } from './Invoice.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoiceResponse = { "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; };
