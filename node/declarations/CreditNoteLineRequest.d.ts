
import type { CreditNoteCorrectionRequest } from './CreditNoteCorrectionRequest.js';

export type CreditNoteLineRequest = { "correction": CreditNoteCorrectionRequest; "credit_note_line_id"?: string; "invoice_line_item_id": string; };
