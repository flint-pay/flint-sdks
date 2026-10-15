import type { InputValue } from '../runtime.js';
import type { InvoiceCheckoutSessionRequestInput } from './InvoiceCheckoutSessionRequestInput.js';

export type MeCreateInvoiceCheckoutSessionInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<InvoiceCheckoutSessionRequestInput>; };
