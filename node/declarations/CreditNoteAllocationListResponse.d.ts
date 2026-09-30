
import type { CreditNoteAllocation } from './CreditNoteAllocation.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreditNoteAllocationListResponse = { "data": Array<CreditNoteAllocation>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
