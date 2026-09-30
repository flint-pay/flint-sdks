
import type { ResponseMeta } from './ResponseMeta.js';
import type { Subscription } from './Subscription.js';

export type SubscriptionListResponse = { "data": Array<Subscription>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
