import type { InputValue } from '../runtime.js';
import type { ResourceVersionRequestInput } from './ResourceVersionRequestInput.js';

export type InvoicesPauseRemindersInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<ResourceVersionRequestInput>; };
