import type { InputValue } from '../runtime.js';


export type InvoicePaymentTermsRemoveInput = { "invoice_payment_term_id": InputValue<string>; /** Format: uint32. minimum: 1. */ "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
