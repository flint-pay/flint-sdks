
import type { GiftCardRedemptionInput } from './GiftCardRedemptionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type GiftCardRedemptionListResponseInput = { "data": Array<GiftCardRedemptionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
