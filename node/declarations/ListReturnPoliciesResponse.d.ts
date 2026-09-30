
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnPolicy } from './ReturnPolicy.js';

export type ListReturnPoliciesResponse = { "data": Array<ReturnPolicy>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
