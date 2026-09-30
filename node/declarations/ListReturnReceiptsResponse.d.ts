
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnReceipt } from './ReturnReceipt.js';

export type ListReturnReceiptsResponse = { "data": Array<ReturnReceipt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
