import type { InputValue } from '../runtime.js';
import type { UpdateCreditNoteRequestInput } from './UpdateCreditNoteRequestInput.js';

export type CreditNotesUpdateInput = { "credit_note_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateCreditNoteRequestInput>; };
