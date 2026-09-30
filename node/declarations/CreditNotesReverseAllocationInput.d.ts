import type { InputValue } from '../runtime.js';
import type { ResourceVersionRequestInput } from './ResourceVersionRequestInput.js';

export type CreditNotesReverseAllocationInput = { "credit_note_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "credit_note_allocation_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<ResourceVersionRequestInput>; };
