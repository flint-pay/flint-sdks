
import type { BuyerCreditNote } from './BuyerCreditNote.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerCreditNoteListResponse = { "data": Array<BuyerCreditNote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
