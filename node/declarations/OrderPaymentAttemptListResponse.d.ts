
import type { OrderPaymentAttempt } from './OrderPaymentAttempt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrderPaymentAttemptListResponse = { "data": Array<OrderPaymentAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
