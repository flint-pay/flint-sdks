
import type { PromotionInput } from './PromotionInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PromotionListResponseInput = { "data": Array<PromotionInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
