
import type { ResponseMeta } from './ResponseMeta.js';
import type { SubscriptionOffer } from './SubscriptionOffer.js';

export type SubscriptionOfferResponse = { "data": SubscriptionOffer; "meta"?: ResponseMeta; "request_id"?: string; };
