
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnResolution } from './ReturnResolution.js';

export type ListReturnResolutionsResponse = { "data": Array<ReturnResolution>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
