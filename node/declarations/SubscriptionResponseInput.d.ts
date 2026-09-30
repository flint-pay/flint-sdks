
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionInput } from './SubscriptionInput.js';

export type SubscriptionResponseInput = { "data": SubscriptionInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
