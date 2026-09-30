
import type { DeliveryLocationSet } from './DeliveryLocationSet.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryLocationSetListResponse = { "data": Array<DeliveryLocationSet>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
