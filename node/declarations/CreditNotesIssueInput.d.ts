import type { InputValue } from '../runtime.js';
import type { IssueCreditNoteRequestInput } from './IssueCreditNoteRequestInput.js';

export type CreditNotesIssueInput = { "credit_note_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<IssueCreditNoteRequestInput>; };
