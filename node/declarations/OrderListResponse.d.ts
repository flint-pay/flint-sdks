
import type { Order } from './Order.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderListResponse = { "data": Array<Order>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
