
import type { PromotionCodeInput } from './PromotionCodeInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PromotionCodeListResponseInput = { "data": Array<PromotionCodeInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
