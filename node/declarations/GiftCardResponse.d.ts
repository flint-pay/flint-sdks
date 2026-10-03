
import type { GiftCard } from './GiftCard.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardResponse = { "data": GiftCard; "meta"?: ResponseMeta; "request_id"?: string; };
