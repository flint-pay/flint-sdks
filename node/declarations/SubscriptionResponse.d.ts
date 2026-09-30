
import type { ResponseMeta } from './ResponseMeta.js';
import type { Subscription } from './Subscription.js';

export type SubscriptionResponse = { "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; };
