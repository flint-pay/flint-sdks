
import type { InvoiceEventInput } from './InvoiceEventInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoiceEventListResponseInput = { "data": Array<InvoiceEventInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
