
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionPlan } from './SubscriptionPlan.js';

export type SubscriptionPlanResponse = { "data": SubscriptionPlan; "meta"?: ResponseMeta; "request_id"?: string; };
