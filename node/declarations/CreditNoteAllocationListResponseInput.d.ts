
import type { CreditNoteAllocationInput } from './CreditNoteAllocationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CreditNoteAllocationListResponseInput = { "data": Array<CreditNoteAllocationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
