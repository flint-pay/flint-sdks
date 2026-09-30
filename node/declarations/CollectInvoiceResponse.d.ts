
import type { CollectInvoiceResult } from './CollectInvoiceResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CollectInvoiceResponse = { "data": CollectInvoiceResult; "meta"?: ResponseMeta; "request_id"?: string; };
