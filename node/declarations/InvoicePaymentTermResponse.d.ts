
import type { InvoicePaymentTerm } from './InvoicePaymentTerm.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InvoicePaymentTermResponse = { "data": InvoicePaymentTerm; "meta"?: ResponseMeta; "request_id"?: string; };
