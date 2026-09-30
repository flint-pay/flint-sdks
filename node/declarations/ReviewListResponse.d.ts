
import type { ResponseMeta } from './ResponseMeta.js';
import type { Review } from './Review.js';

export type ReviewListResponse = { "data": Array<Review>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
