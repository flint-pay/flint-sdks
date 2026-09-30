
import type { InvoicePaymentTermInput } from './InvoicePaymentTermInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoicePaymentTermListResponseInput = { "data": Array<InvoicePaymentTermInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
