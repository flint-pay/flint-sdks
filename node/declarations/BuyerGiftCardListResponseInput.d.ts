
import type { BuyerGiftCardInput } from './BuyerGiftCardInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BuyerGiftCardListResponseInput = { "data": Array<BuyerGiftCardInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
