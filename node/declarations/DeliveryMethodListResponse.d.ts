
import type { DeliveryMethod } from './DeliveryMethod.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryMethodListResponse = { "data": Array<DeliveryMethod>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
