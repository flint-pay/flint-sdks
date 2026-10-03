
import type { GiftCardInput } from './GiftCardInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type GiftCardListResponseInput = { "data": Array<GiftCardInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
