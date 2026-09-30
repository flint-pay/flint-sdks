
import type { CheckoutSession } from './CheckoutSession.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CheckoutSessionListResponse = { "data": Array<CheckoutSession>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
