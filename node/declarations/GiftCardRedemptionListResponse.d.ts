
import type { GiftCardRedemption } from './GiftCardRedemption.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardRedemptionListResponse = { "data": Array<GiftCardRedemption>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
