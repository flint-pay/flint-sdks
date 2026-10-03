
import type { GiftCard } from './GiftCard.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardListResponse = { "data": Array<GiftCard>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
