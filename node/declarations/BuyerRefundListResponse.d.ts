
import type { BuyerRefund } from './BuyerRefund.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BuyerRefundListResponse = { "data": Array<BuyerRefund>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
