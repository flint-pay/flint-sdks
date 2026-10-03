
import type { GiftCardTransaction } from './GiftCardTransaction.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardTransactionListResponse = { "data": Array<GiftCardTransaction>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
