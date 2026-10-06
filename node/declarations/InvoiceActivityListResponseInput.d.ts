
import type { InvoiceActivityInput } from './InvoiceActivityInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoiceActivityListResponseInput = { "data": Array<InvoiceActivityInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
