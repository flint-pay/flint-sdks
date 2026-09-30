
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionPaymentRetry } from './SubscriptionPaymentRetry.js';

export type SubscriptionPaymentRetryListResponse = { "data": Array<SubscriptionPaymentRetry>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
