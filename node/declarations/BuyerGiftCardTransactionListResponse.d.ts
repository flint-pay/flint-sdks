
import type { BuyerGiftCardTransaction } from './BuyerGiftCardTransaction.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerGiftCardTransactionListResponse = { "data": Array<BuyerGiftCardTransaction>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
