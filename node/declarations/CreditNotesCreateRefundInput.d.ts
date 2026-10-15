import type { InputValue } from '../runtime.js';
import type { CreateCreditNoteRefundRequestInput } from './CreateCreditNoteRefundRequestInput.js';

export type CreditNotesCreateRefundInput = { "credit_note_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateCreditNoteRefundRequestInput>; };
