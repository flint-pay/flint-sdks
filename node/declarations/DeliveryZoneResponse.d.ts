
import type { DeliveryZone } from './DeliveryZone.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryZoneResponse = { "data": DeliveryZone; "meta"?: ResponseMeta; "request_id"?: string; };
