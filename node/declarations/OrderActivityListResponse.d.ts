
import type { OrderActivity } from './OrderActivity.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderActivityListResponse = { "data": Array<OrderActivity>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
