
import type { CreditNote } from './CreditNote.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreditNoteListResponse = { "data": Array<CreditNote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
