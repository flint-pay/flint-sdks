
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionPlanInput } from './SubscriptionPlanInput.js';

export type SubscriptionPlanListResponseInput = { "data": Array<SubscriptionPlanInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
