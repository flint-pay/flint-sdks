
import type { Promotion } from './Promotion.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PromotionResponse = { "data": Promotion; "meta"?: ResponseMeta; "request_id"?: string; };
