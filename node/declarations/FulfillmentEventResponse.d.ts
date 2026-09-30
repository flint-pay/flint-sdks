
import type { FulfillmentEventResult } from './FulfillmentEventResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type FulfillmentEventResponse = { "data": FulfillmentEventResult; "meta"?: ResponseMeta; "request_id"?: string; };
