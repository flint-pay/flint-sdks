
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionPaymentRetry } from './SubscriptionPaymentRetry.js';

export type SubscriptionPaymentRetryResponse = { "data": SubscriptionPaymentRetry; "meta"?: ResponseMeta; "request_id"?: string; };
