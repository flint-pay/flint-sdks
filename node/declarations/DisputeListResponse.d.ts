
import type { Dispute } from './Dispute.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DisputeListResponse = { "data": Array<Dispute>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
