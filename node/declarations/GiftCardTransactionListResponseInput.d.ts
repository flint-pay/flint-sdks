
import type { GiftCardTransactionInput } from './GiftCardTransactionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type GiftCardTransactionListResponseInput = { "data": Array<GiftCardTransactionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
