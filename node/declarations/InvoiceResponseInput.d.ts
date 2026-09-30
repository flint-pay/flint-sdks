
import type { InvoiceInput } from './InvoiceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoiceResponseInput = { "data": InvoiceInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
