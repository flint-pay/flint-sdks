
import type { CreditNoteLineRequest } from './CreditNoteLineRequest.js';

export type CreateCreditNoteRequest = { /** Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted. */ "credit_note_lines"?: Array<CreditNoteLineRequest>; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** The invoice to correct. It has to be past draft and not voided. */ "invoice_id": string; /** maxLength: 4096. */ "memo"?: string; "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {}); };
