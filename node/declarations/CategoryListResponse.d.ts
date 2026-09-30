
import type { Category } from './Category.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CategoryListResponse = { "data": Array<Category>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
