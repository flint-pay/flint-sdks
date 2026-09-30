
import type { DeliveryMethod } from './DeliveryMethod.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryMethodResponse = { "data": DeliveryMethod; "meta"?: ResponseMeta; "request_id"?: string; };
