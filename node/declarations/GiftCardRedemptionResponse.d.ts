
import type { GiftCardRedemption } from './GiftCardRedemption.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardRedemptionResponse = { "data": GiftCardRedemption; "meta"?: ResponseMeta; "request_id"?: string; };
