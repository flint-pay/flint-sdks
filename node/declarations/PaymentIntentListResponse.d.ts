
import type { PaymentIntent } from './PaymentIntent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PaymentIntentListResponse = { "data": Array<PaymentIntent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
