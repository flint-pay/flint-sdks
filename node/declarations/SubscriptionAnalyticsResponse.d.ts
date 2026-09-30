
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionAnalytics } from './SubscriptionAnalytics.js';

export type SubscriptionAnalyticsResponse = { "data": SubscriptionAnalytics; "meta"?: ResponseMeta; "request_id"?: string; };
