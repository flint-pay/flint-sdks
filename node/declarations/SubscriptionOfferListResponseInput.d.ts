
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionOfferInput } from './SubscriptionOfferInput.js';

export type SubscriptionOfferListResponseInput = { "data": Array<SubscriptionOfferInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
