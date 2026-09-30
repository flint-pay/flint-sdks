import type { InputValue } from '../runtime.js';
import type { AssessInvoiceLateFeeRequestInput } from './AssessInvoiceLateFeeRequestInput.js';

export type MeCreateInvoiceCheckoutSessionInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<AssessInvoiceLateFeeRequestInput>; };
