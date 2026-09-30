
import type { Refund } from './Refund.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type RefundResponse = { "data": Refund; "meta"?: ResponseMeta; "request_id"?: string; };
