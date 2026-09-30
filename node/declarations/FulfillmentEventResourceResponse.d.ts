
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentEventResourceResponse = { "data": FulfillmentEvent; "meta"?: ResponseMeta; "request_id"?: string; };
