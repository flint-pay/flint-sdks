
import type { GiftCardLoad } from './GiftCardLoad.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type GiftCardLoadListResponse = { "data": Array<GiftCardLoad>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
