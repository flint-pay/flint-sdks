import type { InputValue } from '../runtime.js';
import type { CollectInvoiceRequestInput } from './CollectInvoiceRequestInput.js';

export type InvoicesCollectInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CollectInvoiceRequestInput>; };
