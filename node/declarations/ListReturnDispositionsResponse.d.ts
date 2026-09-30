
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnDisposition } from './ReturnDisposition.js';

export type ListReturnDispositionsResponse = { "data": Array<ReturnDisposition>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
