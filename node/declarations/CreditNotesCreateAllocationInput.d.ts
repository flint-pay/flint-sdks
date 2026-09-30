import type { InputValue } from '../runtime.js';
import type { CreateCreditNoteAllocationRequestInput } from './CreateCreditNoteAllocationRequestInput.js';

export type CreditNotesCreateAllocationInput = { "credit_note_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCreditNoteAllocationRequestInput>; };
