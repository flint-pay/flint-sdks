
import type { InvoicePaymentAttemptInput } from './InvoicePaymentAttemptInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoicePaymentAttemptListResponseInput = { "data": Array<InvoicePaymentAttemptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
