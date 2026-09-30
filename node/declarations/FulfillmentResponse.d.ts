
import type { Fulfillment } from './Fulfillment.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentResponse = { "data": Fulfillment; "meta"?: ResponseMeta; "request_id"?: string; };
