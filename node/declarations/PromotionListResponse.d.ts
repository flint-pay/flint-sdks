
import type { Promotion } from './Promotion.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PromotionListResponse = { "data": Array<Promotion>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
