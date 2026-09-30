
import type { ResponseMeta } from './ResponseMeta.js';
import type { Review } from './Review.js';

export type ReviewResponse = { "data": Review; "meta"?: ResponseMeta; "request_id"?: string; };
