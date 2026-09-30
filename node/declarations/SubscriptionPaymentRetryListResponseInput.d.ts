
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionPaymentRetryInput } from './SubscriptionPaymentRetryInput.js';

export type SubscriptionPaymentRetryListResponseInput = { "data": Array<SubscriptionPaymentRetryInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
