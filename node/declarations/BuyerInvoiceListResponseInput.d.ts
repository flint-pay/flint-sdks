
import type { BuyerInvoiceInput } from './BuyerInvoiceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BuyerInvoiceListResponseInput = { "data": Array<BuyerInvoiceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
