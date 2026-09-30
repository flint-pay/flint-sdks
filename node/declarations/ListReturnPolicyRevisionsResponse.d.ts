
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnPolicyRevision } from './ReturnPolicyRevision.js';

export type ListReturnPolicyRevisionsResponse = { "data": Array<ReturnPolicyRevision>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
