import type { InputValue } from '../runtime.js';
import type { CreateInvoicePaymentTermRequestInput } from './CreateInvoicePaymentTermRequestInput.js';

export type InvoicePaymentTermsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInvoicePaymentTermRequestInput>; };
