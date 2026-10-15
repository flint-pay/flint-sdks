import type { InputValue } from '../runtime.js';
import type { UpdateInvoicePaymentTermRequestInput } from './UpdateInvoicePaymentTermRequestInput.js';

export type InvoicePaymentTermsUpdateInput = { "invoice_payment_term_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<UpdateInvoicePaymentTermRequestInput>; };
