
import type { DeliveryRateCallback } from './DeliveryRateCallback.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryRateCallbackListResponse = { "data": Array<DeliveryRateCallback>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
