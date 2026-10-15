import type { InputValue } from '../runtime.js';
import type { CreateCreditNoteRequestInput } from './CreateCreditNoteRequestInput.js';

export type CreditNotesCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateCreditNoteRequestInput>; };
