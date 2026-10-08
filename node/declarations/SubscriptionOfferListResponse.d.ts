
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionOffer } from './SubscriptionOffer.js';

export type SubscriptionOfferListResponse = { "data": Array<SubscriptionOffer>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
