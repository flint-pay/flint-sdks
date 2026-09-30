
import type { PromotionCode } from './PromotionCode.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PromotionCodeListResponse = { "data": Array<PromotionCode>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
