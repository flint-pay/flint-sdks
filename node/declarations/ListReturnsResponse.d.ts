
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnResource } from './ReturnResource.js';

export type ListReturnsResponse = { "data": Array<ReturnResource>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
