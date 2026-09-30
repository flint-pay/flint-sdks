import type { InputValue } from '../runtime.js';
import type { IssueInvoiceRequestInput } from './IssueInvoiceRequestInput.js';

export type InvoicesIssueInput = { "invoice_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<IssueInvoiceRequestInput>; };
