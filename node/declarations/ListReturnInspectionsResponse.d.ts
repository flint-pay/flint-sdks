
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnInspection } from './ReturnInspection.js';

export type ListReturnInspectionsResponse = { "data": Array<ReturnInspection>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
