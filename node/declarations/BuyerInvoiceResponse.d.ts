
import type { BuyerInvoice } from './BuyerInvoice.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerInvoiceResponse = { "data": BuyerInvoice; "meta"?: ResponseMeta; "request_id"?: string; };
