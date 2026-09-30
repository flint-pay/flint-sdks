import type { InputValue } from '../runtime.js';


export type CreditNotesListAllocationsInput = { "credit_note_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
