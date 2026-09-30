
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnReason } from './ReturnReason.js';

export type ListReturnReasonsResponse = { "data": Array<ReturnReason>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
