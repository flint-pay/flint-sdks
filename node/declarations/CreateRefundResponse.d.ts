
import type { CreateRefundResult } from './CreateRefundResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreateRefundResponse = { "data": CreateRefundResult; "meta"?: ResponseMeta; "request_id"?: string; };
