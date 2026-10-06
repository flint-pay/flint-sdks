
import type { BuyerFulfillmentEvent } from './BuyerFulfillmentEvent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerFulfillmentEventListResponse = { "data": Array<BuyerFulfillmentEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
