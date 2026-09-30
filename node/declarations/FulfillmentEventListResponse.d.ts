
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentEventListResponse = { "data": Array<FulfillmentEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
