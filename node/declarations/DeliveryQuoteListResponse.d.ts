
import type { DeliveryQuote } from './DeliveryQuote.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryQuoteListResponse = { "data": Array<DeliveryQuote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
