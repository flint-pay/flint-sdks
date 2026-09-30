
import type { DeliveryZone } from './DeliveryZone.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryZoneListResponse = { "data": Array<DeliveryZone>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
