
import type { CancelSubscriptionResult } from './CancelSubscriptionResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CancelSubscriptionResponse = { "data": CancelSubscriptionResult; "meta"?: ResponseMeta; "request_id"?: string; };
