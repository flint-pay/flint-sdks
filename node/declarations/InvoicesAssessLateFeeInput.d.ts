import type { InputValue } from '../runtime.js';
import type { AssessInvoiceLateFeeRequestInput } from './AssessInvoiceLateFeeRequestInput.js';

export type InvoicesAssessLateFeeInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<AssessInvoiceLateFeeRequestInput>; };
