
import type { PromotionCode } from './PromotionCode.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PromotionCodeResponse = { "data": PromotionCode; "meta"?: ResponseMeta; "request_id"?: string; };
