
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionInput } from './SubscriptionInput.js';

export type SubscriptionListResponseInput = { "data": Array<SubscriptionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
