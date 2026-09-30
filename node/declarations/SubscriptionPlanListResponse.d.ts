
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionPlan } from './SubscriptionPlan.js';

export type SubscriptionPlanListResponse = { "data": Array<SubscriptionPlan>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
