
import type { Order } from './Order.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderResponse = { "data": Order; "meta"?: ResponseMeta; "request_id"?: string; };
