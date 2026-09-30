
import type { CreditNoteInput } from './CreditNoteInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CreditNoteListResponseInput = { "data": Array<CreditNoteInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
