import type { InputValue } from '../runtime.js';
import type { UpdateInvoiceRequestInput } from './UpdateInvoiceRequestInput.js';

export type InvoicesUpdateInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateInvoiceRequestInput>; };
