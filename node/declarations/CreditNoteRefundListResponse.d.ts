
import type { Refund } from './Refund.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreditNoteRefundListResponse = { "data": Array<Refund>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
