
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ReturnReceiptInput } from './ReturnReceiptInput.js';

export type ListReturnReceiptsResponseInput = { "data": Array<ReturnReceiptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
