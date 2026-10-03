
import type { BuyerRefundInput } from './BuyerRefundInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BuyerRefundListResponseInput = { "data": Array<BuyerRefundInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
