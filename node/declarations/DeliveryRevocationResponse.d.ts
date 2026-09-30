
import type { DeliveryRevocation } from './DeliveryRevocation.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryRevocationResponse = { "data": DeliveryRevocation; "meta"?: ResponseMeta; "request_id"?: string; };
