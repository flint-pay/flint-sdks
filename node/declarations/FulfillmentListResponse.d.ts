
import type { Fulfillment } from './Fulfillment.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentListResponse = { "data": Array<Fulfillment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
