
import type { BuyerInvoice } from './BuyerInvoice.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerInvoiceListResponse = { "data": Array<BuyerInvoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
