
import type { InvoiceInput } from './InvoiceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoiceListResponseInput = { "data": Array<InvoiceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
