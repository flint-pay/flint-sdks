
import type { RefundInput } from './RefundInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CreditNoteRefundListResponseInput = { "data": Array<RefundInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
