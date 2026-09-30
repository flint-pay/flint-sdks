import type { InputValue } from '../runtime.js';
import type { WaiveInvoiceLateFeeRequestInput } from './WaiveInvoiceLateFeeRequestInput.js';

export type InvoicesWaiveLateFeeInput = { "invoice_id": InputValue<string>; "invoice_late_fee_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<WaiveInvoiceLateFeeRequestInput>; };
