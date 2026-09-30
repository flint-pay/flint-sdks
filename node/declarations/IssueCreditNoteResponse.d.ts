
import type { IssuedCreditNote } from './IssuedCreditNote.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type IssueCreditNoteResponse = { "data": IssuedCreditNote; "meta"?: ResponseMeta; "request_id"?: string; };
