
import type { DeliveryProfile } from './DeliveryProfile.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryProfileResponse = { "data": DeliveryProfile; "meta"?: ResponseMeta; "request_id"?: string; };
