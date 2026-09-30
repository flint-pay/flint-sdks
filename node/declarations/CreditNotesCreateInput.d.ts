import type { InputValue } from '../runtime.js';
import type { CreateCreditNoteRequestInput } from './CreateCreditNoteRequestInput.js';

export type CreditNotesCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCreditNoteRequestInput>; };
