
import type { Category } from './Category.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CategoryResponse = { "data": Category; "meta"?: ResponseMeta; "request_id"?: string; };
