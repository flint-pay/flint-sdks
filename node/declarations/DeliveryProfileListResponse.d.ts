
import type { DeliveryProfile } from './DeliveryProfile.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryProfileListResponse = { "data": Array<DeliveryProfile>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
