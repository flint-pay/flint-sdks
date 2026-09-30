import type { InputValue } from '../runtime.js';
import type { InvoiceManualPaymentRequestInput } from './InvoiceManualPaymentRequestInput.js';

export type InvoicesRecordManualPaymentInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<InvoiceManualPaymentRequestInput>; };
