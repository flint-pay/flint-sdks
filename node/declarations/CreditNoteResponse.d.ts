
import type { CreditNote } from './CreditNote.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreditNoteResponse = { "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; };
